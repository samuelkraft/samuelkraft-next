import { ReactNode } from 'react'
import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Link from 'next/link'
import cn from 'classnames'

import styles from './changelog.module.scss'

export const formatDate = (date: string) =>
  new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

type EntryProps = {
  title: string
  date?: string
  children?: ReactNode
  type?: 'isDone' | 'inProgress' | 'inBacklog'
  identifier?: string
}

const Entry = ({ title, date, children, type = 'isDone', identifier }: EntryProps) => {
  return (
    <section className={cn(styles.entry, styles[type])}>
      <h2 className={styles.title}>{title}</h2>
      <span className={styles.meta}>
        {date && (
          <time dateTime={date} className={styles.date}>
            {type === 'inProgress' && 'Started '}
            {formatDate(date)}
          </time>
        )}
        {date && identifier && <span className={styles.separator}>·</span>}
        {identifier && <span className={styles.identifier}>{identifier}</span>}
      </span>
      {children && <div className={styles.content}>{children}</div>}
    </section>
  )
}

const Changelog = (): JSX.Element => {
  const { data } = useSWR('/api/issues', fetcher)

  const inBacklog = data?.issues.filter(issue => issue._state.id === 'cdaf432e-c8bc-4184-b49c-92f6346c5df4') /* eslint-disable-line */
  const inProgress = data?.issues.filter(issue => issue._state.id === 'b4b287c6-ebae-4ee3-832b-be5d1b019e7b') /* eslint-disable-line */

  return (
    <Page>
      <PageHeader title="Changelog" description="What's new on this site?" />
      <section className={styles.section}>
        <Entry date="2021-03-14" title="Added Changelog">
          <p>
            That&apos;s what you&apos;re looking at right now! 🎉 In the spirit of{' '}
            <Link href="https://twitter.com/search?q=%23buildinpublic">
              <a>#buildinpublic</a>
            </Link>{' '}
            I am now publishing the latest changes for this site in this changelog in addition to keeping the souce public on{' '}
            <Link href="https://github.com/samuelkraft/samuelkraft-next">
              <a>Github</a>
            </Link>
            .
          </p>
          <p>
            Since this website was release I&apos;ve on this date made 128 commits with various features and improvements. I&apos;ve
            retrofitted this changelog with some of the major ones.
          </p>
        </Entry>
        <Entry date="2021-03-09" title="Added search to /blog">
          <p>
            You can now search for posts on{' '}
            <Link href="/blog">
              <a>the blog</a>
            </Link>{' '}
            to quickly find what you&apos;re looking for. It&apos;s also a great way for me to see what people are interested in reading
            about.
          </p>
          <p>
            <strong>Other changes:</strong>
          </p>
          <ul>
            <li>Use correct font in Notion content</li>
            <li>Added code line highlightning via mdx-prism</li>
            <li>Added canonical urls to blogposts</li>
          </ul>
        </Entry>
        <Entry date="2021-01-11" title="This site was born!">
          <p>This website went live and was built with the following stack:</p>
          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>MDX</li>
            <li>CSS Modules</li>
            <li>Notion</li>
          </ul>
        </Entry>
      </section>
      <section className={styles.section}>
        <h2>Currently working on…</h2>
        {inProgress?.map(issue => (
          <Entry date={issue.startedAt} title={issue.title} type="inProgress" identifier={issue.identifier} />
        ))}
      </section>
      <section className={styles.section}>
        <h2>Up next…</h2>
        {inBacklog?.map(issue => (
          <Entry title={issue.title} type="inBacklog" identifier={issue.identifier} />
        ))}
      </section>
    </Page>
  )
}

export default Changelog
