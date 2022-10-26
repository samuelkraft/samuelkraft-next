import { GetStaticProps } from 'next'
import { ReactNode } from 'react'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Link from 'next/link'
import cn from 'classnames'
import { getAllIssues } from 'lib/linear'
import type { Issue } from '@linear/sdk'
import { formatDate } from 'lib/formatdate'
import { NextSeo } from 'next-seo'

import styles from './changelog.module.scss'

type EntryProps = {
  title: string
  date?: string
  children?: ReactNode
  type?: 'isDone' | 'inProgress' | 'inBacklog'
  identifier?: string
  commit?: string
}

const Entry = ({ title, date, children, type = 'isDone', identifier, commit }: EntryProps) => {
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
        {date && (identifier || commit) && <span className={styles.separator}>·</span>}
        {identifier && <span title="Linear issue identifier">{identifier}</span>}
        {commit && (
          <a
            href={`https://github.com/samuelkraft/samuelkraft-next/commit/${commit}`}
            target="_blank"
            rel="noreferrer noopener"
            title="GitHub commit"
          >
            {commit.substring(0, 8)}
          </a>
        )}
      </span>
      {children && <div className={styles.content}>{children}</div>}
    </section>
  )
}

type ChangelogProps = {
  inProgress: Array<Issue>
  inBacklog: Array<Issue>
}

const Changelog = ({ inProgress, inBacklog }: ChangelogProps): JSX.Element => {
  const seoTitle = 'Changelog | Samuel Kraft'
  const seoDesc = "What's new on this site?"
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/changelog/`,
          description: seoDesc,
          site_name: 'Samuel Kraft',
          images: [
            {
              url: `https://og-image.samuelkraft.vercel.app/Changelog?desc=${encodeURIComponent(seoDesc)}&theme=dark.png`,
              alt: seoTitle,
            },
          ],
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader title="Changelog" description="What's new on this site?" />
      <section className={styles.section}>
        <Entry date="2021-06-25" title="Added blogpost recommendations" commit="787ff45f6d9463d1f165082e48026c61d857f656">
          <p>
            Added related posts after a blogpost based on the tags to increase engagement.{' '}
            <Link href="https://samuelkraft.com/blog/safari-15-bottom-tab-bars-web">Try a post!</Link>.
          </p>
        </Entry>
        <Entry date="2021-06-24" title="Combining custom likes with twitter likes" commit="a7504b4b8f7fca330d889eebc4fe7b2498c8348b">
          <p>
            Added support for Webmentions to the blog. I&apos;m combining likes and mentions from twitter with my custom likes from Fauna.
            Next up displaying replies/comments?
          </p>
        </Entry>
        <Entry date="2021-04-23" title="Updated theme toggle" commit="5ba5761b2b2c0cf75029675d187623ad810a5831">
          <p>
            In order to respect the visitors system preference a theme switcher should have at least 3 options (system, dark &amp; light). I
            had super fun building this interactive switcher with Framer motion, try it out in the header!
          </p>
        </Entry>
        <Entry date="2021-03-19" title="Added blogpost tags" commit="4b357bc6307a628b9d71244d36d5d295448c851d">
          <p>
            Easily find posts on a specific topic, try out <Link href="/blog/tag/react">#React</Link>,{' '}
            <Link href="/blog/tag/framer-motion">#Framer Motion</Link> or <Link href="/blog/tag/css">#CSS</Link>.
          </p>
        </Entry>
        <Entry date="2021-03-14" title="Added Changelog" commit="3b6ac85a642a35586a03acc3623a171cd860d5b4">
          <p>
            That&apos;s what you&apos;re looking at right now! 🎉 In the spirit of{' '}
            <a href="https://twitter.com/search?q=%23buildinpublic" target="_blank" rel="noreferrer noopener">
              #buildinpublic
            </a>{' '}
            I am now publishing the latest changes for this site in this changelog in addition to keeping the souce public on{' '}
            <a href="https://github.com/samuelkraft/samuelkraft-next" target="_blank" rel="noreferrer noopener">
              GitHub
            </a>
            . If you want to see how a feature is built I&apos;ve included the commit hashes and a link to the respective commit.
          </p>
          <p>
            Since this website was released I have to date added 128 commits with various features and improvements. I&apos;ve retrofitted
            this changelog with some of the major ones.
          </p>
        </Entry>
        <Entry date="2021-03-09" title="🔍 Added search to /blog" commit="0030768083320b0cd37dc82c428a97e5e5fdc0a7">
          <p>
            You can now search for posts on <Link href="/blog">the blog</Link> to quickly find what you&apos;re looking for. It&apos;s also
            a great way for me to see what people are interested in reading about.
          </p>
          <strong>Other changes:</strong>
          <ul>
            <li>Use correct font in Notion content</li>
            <li>Fix notion pages getStaticPaths fallback</li>
            <li>Added code line highlightning via mdx-prism</li>
            <li>Added canonical urls to blogposts</li>
            <li>Improved newsletter signup page</li>
          </ul>
        </Entry>
        <Entry date="2021-02-12" title="🖼 Added images to all blogposts" commit="2648c44eb12be873a986f910a38c27033d72e641">
          <p>
            The posts in <Link href="/blog">the blog</Link> are now a lot more clickable!
          </p>
        </Entry>
        <Entry date="2021-02-12" title="👍 Added like button to blogposts" commit="13aa0dbef7abe5cad2f90755956923ce65842d87">
          <p>
            Show me what you enjoy by pressing the like button on blogposts! Built with Fauna inspired by Josh&apos;s{' '}
            <a href="https://www.joshwcomeau.com/react/serverless-hit-counter/" target="_blank" rel="noreferrer noopener">
              post on page-counters
            </a>
            .
          </p>
        </Entry>
        <Entry date="2021-02-04" title="💌 Added newsletter" commit="45f860afc2d5deb05d5319a407bb60ed72c15bb4">
          <p>
            Learn animations, CSS, web development tips &amp; tricks and creating delightful and useful interfaces!{' '}
            <Link href="/newsletter">Sign up here</Link>.
          </p>
        </Entry>
        <Entry date="2021-01-30" title="🎶 Add now playing widget to footer" commit="5898535acfa8619b25c082a9ed86da909312354a">
          <p>
            Check out the original implementation by{' '}
            <a href="https://leerob.io/snippets/spotify" target="_blank" rel="noreferrer noopener">
              Lee Robinson
            </a>
            .
          </p>
          <strong>Other changes:</strong>
          <ul>
            <li>Animated page transitions</li>
            <li>Added LICENSE</li>
            <li>Dynamic meta images</li>
          </ul>
        </Entry>
        <Entry date="2021-01-27" title="Add Hit-counter to blogposts" commit="814e7bda5106c44bdb04032808546846ebfbc78e">
          <strong>Other changes:</strong>
          <ul>
            <li>Added RSS feed</li>
            <li>Added custom 404 page</li>
          </ul>
        </Entry>
        <Entry date="2021-01-24" title="Add sitemap" commit="d63443c1e65bc8cf2e620fe674a7c38cfa8179c2">
          <strong>Other changes:</strong>
          <ul>
            <li>Added syntax highlightning to blog</li>
            <li>Added analytics</li>
            <li>Added social links to footer</li>
            <li>Dynamic meta images</li>
          </ul>
        </Entry>
        <Entry date="2021-01-10" title="⚡️ This site was born!" commit="e28c72b6577d269d2647a069c2bb21ca1872f3f5">
          <p>This website went live and was built with the following stack:</p>
          <ul>
            <li>Next.js</li>
            <li>Typescript</li>
            <li>MDX</li>
            <li>CSS Modules</li>
            <li>Notion</li>
          </ul>
        </Entry>
        <Entry date="2021-01-04" title="Initial commit" commit="26085f345f076461cce5d645d6d973f33837ef10" />
      </section>
      {inProgress.length ? (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Currently working on…</h2>
          {inProgress.map(issue => (
            <Entry
              key={issue.id}
              date={new Date(issue.startedAt).toString()}
              title={issue.title}
              type="inProgress"
              identifier={issue.identifier}
            />
          ))}
        </section>
      ) : null}
      {inBacklog.length ? (
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>In the backlog…</h2>
          {inBacklog.map(issue => (
            <Entry key={issue.id} title={issue.title} type="inBacklog" identifier={issue.identifier} />
          ))}
        </section>
      ) : null}
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await getAllIssues()
  const unparsedIssues = await response

  /* Fix for JSON parsing error https://github.com/vercel/next.js/issues/11993 */
  const issues = JSON.parse(JSON.stringify(unparsedIssues))

  if (!issues) {
    return {
      notFound: true,
    }
  }

  const inBacklog = issues.filter(issue => issue._state.id === 'cdaf432e-c8bc-4184-b49c-92f6346c5df4') /* eslint-disable-line */
  const inProgress = issues.filter(issue => issue._state.id === 'b4b287c6-ebae-4ee3-832b-be5d1b019e7b') /* eslint-disable-line */

  return {
    props: {
      inBacklog,
      inProgress,
    },
    revalidate: 3600,
  }
}

export default Changelog
