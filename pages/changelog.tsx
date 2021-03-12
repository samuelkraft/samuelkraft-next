import { ReactNode } from 'react'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Image from 'next/image'
import Link from 'next/link'

import styles from './changelog.module.scss'

export const formatDate = (date: string) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

type PostProps = {
  title: string
  date: string
  slug: string
}

const Post = ({ title, date, slug }: PostProps) => {
  return (
    <section className={styles.post}>
      <h2 className={styles.title}>{title}</h2>
      <time dateTime={date} className={styles.date}>
        {formatDate(date)}
      </time>
      <div className={styles.content}>
        <Link href={`/blog/${slug}`}>
          <a>
            <figure className={styles.image}>
              <Image src={`/blog/${slug}/image.png`} width={2024} height={1012} layout="responsive" />
            </figure>
          </a>
        </Link>
      </div>
    </section>
  )
}

type EntryProps = {
  title: string
  date: string
  children: ReactNode
}

const Entry = ({ title, date, children }: EntryProps) => {
  return (
    <section className={styles.entry}>
      <h2 className={styles.title}>{title}</h2>
      <time dateTime={date} className={styles.date}>
        {formatDate(date)}
      </time>
      <div className={styles.content}>{children}</div>
    </section>
  )
}

const Changelog = (): JSX.Element => (
  <Page>
    <PageHeader title="Changelog" description="What's new on this site?" />
    <Entry date="2021-03-09" title="Added search to /blog">
      <p>
        You can now search for posts on{' '}
        <Link href="/blog">
          <a>the blog</a>
        </Link>{' '}
        to quickly find what you&apos;re looking for. It&apos;s also a great way for me to see what people are interested in reading about.
      </p>
      <ul>
        <li>Use correct font in Notion content</li>
        <li>Added code line highlightning via mdx-prism</li>
        <li>Added canonical urls to blogposts (inspired by bloggingfordevs.com)</li>
      </ul>
    </Entry>
    <Post date="2021-02-21" title="New post published" slug="ios-chat-bubbles-css" />
    <Entry date="2021-01-11" title="This site was born!">
      <p>This website went live and was built with the following stack:</p>
      <ul>
        <li>Next.js</li>
        <li>Typescript</li>
        <li>Notion</li>
      </ul>
    </Entry>
  </Page>
)

export default Changelog
