import fs from 'node:fs/promises';
import path from 'node:path';

function parseFrontmatter(source) {
  const match = source.match(/^---\n([\s\S]*?)\n---\n?/);
  if (!match) return null;
  return {
    full: match[0],
    body: match[1],
    start: 0,
    end: match[0].length,
  };
}

function upsertKey(frontmatterBody, key, value) {
  const lines = frontmatterBody.split('\n');
  const prefix = `${key}:`;
  const idx = lines.findIndex((l) => l.trimStart().startsWith(prefix));
  const nextLine = `${key}: ${value}`;

  if (idx >= 0) {
    lines[idx] = nextLine;
    return lines.join('\n');
  }

  lines.push(nextLine);
  return lines.join('\n');
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

  let updated = 0;
  let missing = 0;

  for (const p of posts) {
    const slug = typeof p?.slug === 'string' ? p.slug : null;
    if (!slug) continue;

    const target = await findTargetFile(absOut, slug);
    if (!target) {
      missing += 1;
      continue;
    }

    const src = await fs.readFile(target, 'utf8');
    const fm = parseFrontmatter(src);
    if (!fm) continue;

    const nextReadTime = typeof p?.readTime === 'number' ? p.readTime : null;
    const nextViews = typeof p?.views === 'number' ? p.views : null;

    let nextBody = fm.body;
    if (nextReadTime !== null) nextBody = upsertKey(nextBody, 'readTime', nextReadTime);
    if (nextViews !== null) nextBody = upsertKey(nextBody, 'views', nextViews);

    if (nextBody === fm.body) continue;

    const nextFull = `---\n${nextBody}\n---\n`;
    const next = nextFull + src.slice(fm.end);

    await fs.writeFile(target, next, 'utf8');
    updated += 1;
  }

  console.log(`Updated ${updated} markdown files. Missing slug matches: ${missing}`);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
