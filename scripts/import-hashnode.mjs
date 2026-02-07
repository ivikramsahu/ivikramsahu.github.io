import fs from 'node:fs/promises';
import path from 'node:path';

function asString(value) {
  return typeof value === 'string' ? value : undefined;
}

function firstString(...values) {
  for (const v of values) {
    const s = asString(v);
    if (s && s.trim()) return s;
  }
  return undefined;
}

function parseDate(value) {
  if (value instanceof Date && !Number.isNaN(value.getTime())) return value;
  const s = asString(value);
  if (!s) return undefined;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return undefined;
  return d;
}

function slugify(input) {
  return input
    .toLowerCase()
    .trim()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
    .slice(0, 80);
}

function formatDateOnly(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function sanitizeHashnodeMarkdown(markdown) {
  if (typeof markdown !== 'string' || !markdown) return '';
  const withoutImageAttrs = markdown.replace(/(!\[[^\]]*\]\()([^\s)]+)(\s+[^)]*)(\))/g, '$1$2$4');
  return withoutImageAttrs.replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '');
}

function escapeYamlString(value) {
  return JSON.stringify(value);
}

function findCandidates(root) {
  const candidates = [];
  const seen = new Set();

  const stack = [root];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== 'object') continue;

    if (seen.has(node)) continue;
    seen.add(node);

    if (Array.isArray(node)) {
      for (const item of node) stack.push(item);
      continue;
    }

    const obj = node;
    const title = asString(obj.title);
    const hasBody =
      typeof obj.contentMarkdown === 'string' ||
      typeof obj.markdown === 'string' ||
      typeof obj.content === 'string' ||
      typeof obj.contentHTML === 'string' ||
      typeof obj.html === 'string';

    if (title && hasBody) candidates.push(obj);

    for (const value of Object.values(obj)) stack.push(value);
  }

  return candidates;
}

function extractPosts(data) {
  const tryPaths = [
    (d) => (Array.isArray(d) ? d : undefined),
    (d) => (Array.isArray(d?.posts) ? d.posts : undefined),
    (d) => (Array.isArray(d?.articles) ? d.articles : undefined),
    (d) => d?.data?.user?.publication?.posts?.edges?.map((e) => e?.node).filter(Boolean),
    (d) => d?.data?.publication?.posts?.edges?.map((e) => e?.node).filter(Boolean),
    (d) => d?.publication?.posts?.edges?.map((e) => e?.node).filter(Boolean),
  ];

  for (const get of tryPaths) {
    const res = get(data);
    if (Array.isArray(res) && res.length) return res;
  }

  const candidates = findCandidates(data);
  if (candidates.length) return candidates;

  return [];
}

function normalizePost(raw) {
  const title = firstString(raw.title);
  if (!title) return undefined;

  const description = firstString(raw.brief, raw.subtitle, raw.excerpt, raw.description);
  const slug = firstString(raw.slug) ?? slugify(title);

  const date =
    parseDate(raw.publishedAt) ??
    parseDate(raw.dateAdded) ??
    parseDate(raw.createdAt) ??
    parseDate(raw.updatedAt) ??
    new Date();

  const draft =
    typeof raw.draft === 'boolean'
      ? raw.draft
      : typeof raw.isDraft === 'boolean'
        ? raw.isDraft
        : raw.publishedAt
          ? false
          : false;

  const body = sanitizeHashnodeMarkdown(
    firstString(raw.contentMarkdown, raw.markdown, raw.content, raw.contentHTML, raw.html) ?? '',
  );

  return { title, description, slug, date, draft, body };
}

async function pathExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function main() {
  const inputPath = process.argv[2];
  const outDirArg = process.argv[3];

  if (!inputPath) {
    console.error('Usage: npm run import:hashnode -- <path-to-export.json> [output-dir]');
    process.exitCode = 1;
    return;
  }

  const outDir = outDirArg
    ? path.resolve(process.cwd(), outDirArg)
    : path.resolve(process.cwd(), 'src/content/blog');

  const absInput = path.resolve(process.cwd(), inputPath);
  const rawJson = await fs.readFile(absInput, 'utf8');
  const data = JSON.parse(rawJson);

  const rawPosts = extractPosts(data);
  const posts = rawPosts.map(normalizePost).filter(Boolean);

  if (!posts.length) {
    console.error('No posts found in the provided JSON export.');
    process.exitCode = 1;
    return;
  }

  await fs.mkdir(outDir, { recursive: true });

  const usedSlugs = new Map();
  let written = 0;

  for (const post of posts) {
    const base = post.slug && post.slug.trim() ? post.slug.trim() : slugify(post.title);
    const count = (usedSlugs.get(base) ?? 0) + 1;
    usedSlugs.set(base, count);

    const slug = count === 1 ? base : `${base}-${count}`;

    let filePath = path.join(outDir, `${slug}.md`);
    let bump = 2;
    while (await pathExists(filePath)) {
      filePath = path.join(outDir, `${slug}-${bump}.md`);
      bump += 1;
    }

    const frontmatterLines = [
      '---',
      `title: ${escapeYamlString(post.title)}`,
      post.description ? `description: ${escapeYamlString(post.description)}` : undefined,
      `date: ${formatDateOnly(post.date)}`,
      post.draft ? 'draft: true' : 'draft: false',
      '---',
      '',
    ].filter((line) => line !== undefined);

    const md = frontmatterLines.join('\n') + post.body.trimStart() + '\n';

    await fs.writeFile(filePath, md, 'utf8');
    written += 1;
  }

  console.log(`Imported ${written} posts into ${path.relative(process.cwd(), outDir)}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
