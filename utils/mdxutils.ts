import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'
import readingTime from 'reading-time'

// POSTS_PATH is useful when you want to get the path to a specific file
export const POSTS_PATH = path.join(process.cwd(), 'data', 'blog')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = fs
  .readdirSync(POSTS_PATH)
  // Only include md(x) files
  .filter(p => /\.mdx?$/.test(p))

export async function getAllMeta() {
  const files = postFilePaths

  return files.reduce((allPosts, filePath) => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))
    const { data, content } = matter(source)

    return [
      {
        ...data,
        readingTime: readingTime(content),
        slug: filePath.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}
