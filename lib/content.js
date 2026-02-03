import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const contentDirectory = path.join(process.cwd(), 'content');

export function getContentByType(type) {
  const typeDir = path.join(contentDirectory, type);
  
  if (!fs.existsSync(typeDir)) {
    return [];
  }

  const fileNames = fs.readdirSync(typeDir);
  const allContent = fileNames
    .filter(fileName => fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.md$/, '');
      const fullPath = path.join(typeDir, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        type,
        ...data,
        content
      };
    });

  return allContent.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });
}

export function getAllContent() {
  const types = ['articles', 'reviews', 'comparatifs'];
  const allContent = [];

  types.forEach(type => {
    const content = getContentByType(type);
    allContent.push(...content);
  });

  return allContent.sort((a, b) => {
    if (a.date && b.date) {
      return new Date(b.date) - new Date(a.date);
    }
    return 0;
  });
}

export function getContentBySlug(type, slug) {
  const fullPath = path.join(contentDirectory, type, `${slug}.md`);
  
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    type,
    ...data,
    content
  };
}

export function getAllSlugs() {
  const types = ['articles', 'reviews', 'comparatifs'];
  const allSlugs = [];

  types.forEach(type => {
    const typeDir = path.join(contentDirectory, type);
    
    if (fs.existsSync(typeDir)) {
      const fileNames = fs.readdirSync(typeDir);
      fileNames
        .filter(fileName => fileName.endsWith('.md'))
        .forEach(fileName => {
          allSlugs.push({
            type,
            slug: fileName.replace(/\.md$/, '')
          });
        });
    }
  });

  return allSlugs;
}
