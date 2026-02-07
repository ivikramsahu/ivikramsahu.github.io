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
  const s = asString(value);
  if (!s) return undefined;
  const d = new Date(s);
  if (Number.isNaN(d.getTime())) return undefined;
  return d;
}

function formatDateOnly(d) {
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const dd = String(d.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function escapeYamlString(value) {
  return JSON.stringify(value);
}

function sanitizeHashnodeMarkdown(markdown) {
  if (typeof markdown !== 'string' || !markdown) return '';
  const withoutImageAttrs = markdown.replace(/(!\[[^\]]*\]\()([^\s)]+)(\s+[^)]*)(\))/g, '$1$2$4');
  return withoutImageAttrs.replace(/[\p{Extended_Pictographic}\uFE0F]/gu, '');
}

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function findTargetFile(outDir, slug) {
  const direct = path.join(outDir, `${slug}.md`);
  if (await fileExists(direct)) return direct;

  const files = await fs.readdir(outDir);
  const starts = files
    .filter((f) => f.startsWith(`${slug}`) && f.endsWith('.md'))
    .map((f) => path.join(outDir, f));

  if (starts.length === 1) return starts[0];
  return null;
}

function normalizePost(raw) {
  const title = firstString(raw?.title);
  const slug = firstString(raw?.slug);
  if (!title || !slug) return null;

  const description = firstString(raw?.brief, raw?.metaDescription, raw?.subtitle, raw?.excerpt);
  const date =
    parseDate(raw?.publishedAt) ??
    parseDate(raw?.dateAdded) ??
    parseDate(raw?.createdAt) ??
    parseDate(raw?.updatedAt) ??
    new Date();

  const draft = typeof raw?.draft === 'boolean' ? raw.draft : false;
  const readTime = typeof raw?.readTime === 'number' ? raw.readTime : undefined;
  const views = typeof raw?.views === 'number' ? raw.views : undefined;

  const body = sanitizeHashnodeMarkdown(
    firstString(raw?.contentMarkdown, raw?.content, raw?.markdown, raw?.contentHTML, raw?.html) ?? '',
  );

  return { title, description, slug, date, draft, readTime, views, body };
}

async function main() {
  const jsonPath = process.argv[2] ?? 'public/md.json';
  const outDir = process.argv[3] ?? 'src/content/blog';

  const absJson = path.resolve(process.cwd(), jsonPath);
  const absOut = path.resolve(process.cwd(), outDir);

  const data = JSON.parse(await fs.readFile(absJson, 'utf8'));
  const posts = Array.isArray(data?.posts) ? data.posts : [];

  if (!posts.length) {
    console.error('No posts found at data.posts in the provided JSON.');
    process.exitCode = 1;
    return;
  }

  let repaired = 0;
  let missing = 0;

  for (const raw of posts) {
    const p = normalizePost(raw);
    if (!p) continue;

    const target = await findTargetFile(absOut, p.slug);
    if (!target) {
      missing += 1;
      continue;
    }

    const frontmatterLines = [
      '---',
      `title: ${escapeYamlString(p.title)}`,
      p.description ? `description: ${escapeYamlString(p.description)}` : undefined,
      `date: ${formatDateOnly(p.date)}`,
      p.draft ? 'draft: true' : 'draft: false',
      typeof p.readTime === 'number' ? `readTime: ${p.readTime}` : undefined,
      typeof p.views === 'number' ? `views: ${p.views}` : undefined,
      '---',
      '',
    ].filter((line) => line !== undefined);

    const md = frontmatterLines.join('\n') + p.body.trimStart() + '\n';
    await fs.writeFile(target, md, 'utf8');
    repaired += 1;
  }

  console.log(`Repaired ${repaired} markdown files. Missing slug matches: ${missing}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
