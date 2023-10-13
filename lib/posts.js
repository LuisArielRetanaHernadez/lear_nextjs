import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectiry = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  const fillName = fs.readdirSync(postsDirectiry);
  const allPostsDate = fillName.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');

    const fullPath = path.join(postsDirectiry, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  });

  return allPostsDate.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } 
    return -1
  })
}
