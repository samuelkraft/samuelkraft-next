import { GetStaticProps } from 'next'
import { useState, ChangeEvent } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Rating from 'components/rating'
import { ChevronDown } from 'react-feather'
import slugifiy from 'slugify'
import { NextSeo } from 'next-seo'

import styles from './books.module.scss'

const sortOptions = [
  { id: 'finished', name: 'Date finished' },
  { id: 'rating', name: 'Rating' },
]

export type Book = {
  Author: string
  Date: string
  Fiction: boolean
  Genres: Array<string>
  Name: string
  Rating: number
  Published: boolean
  Image: Array<{
    name: string
    rawUrl: string
    url: string
  }>
  Link: string
  id: string
}

type BooksProps = {
  published: Array<Book>
  reading: Array<Book>
}

const Books = ({ published, reading }: BooksProps): JSX.Element => {
  const [sorting, setSorting] = useState('finished')
  const seoTitle = 'Books | Samuel Kraft'
  const seoDesc = 'This page contains books I enjoy with my notes, highlights and reviews.'
  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/books/`,
          description: seoDesc,
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader title="Books" description="This page contains books I enjoy with my notes, highlights and reviews.">
        {published.length > 1 && (
          <p className={styles.sortBy}>
            <span>Sort by:</span>
            <label htmlFor="select" className={styles.selectLabel}>
              <select
                value={sorting}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSorting(e.target.value)}
                id="select"
                className={styles.select}
              >
                {sortOptions.map(({ id, name }) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ))}
              </select>
              <ChevronDown />
            </label>
          </p>
        )}
      </PageHeader>
      <ul className={styles.grid}>
        {published
          ?.sort((a, b) => {
            if (sorting === 'finished') {
              return new Date(b.Date).getTime() - new Date(a.Date).getTime()
            }
            return b.Rating - a.Rating
          })
          .map(({ Name: title, Author: author, Rating: rating, Image: image, id }) => {
            const slug = slugifiy(title, { lower: true })
            return (
              <li className={styles.book} key={id}>
                <Link href={`books/${slug}`}>
                  <a>
                    <motion.div whileHover={{ y: -3 }}>
                      <Image src={image[0].url} width={218} height={328} className={styles.cover} />
                    </motion.div>
                    <strong className={styles.title}>{title}</strong>
                    <p className={styles.author}>{author}</p>
                    <Rating rating={rating} />
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
      <h2>Currently reading</h2>
      <ul className={styles.grid}>
        {reading.map(({ Name: title, Author: author, Image: image, id }) => {
          return (
            <li className={styles.book} key={id}>
              <Image src={image[0].url} width={218} height={328} className={styles.cover} />
              <strong className={styles.title}>{title}</strong>
              <p className={styles.author}>{author}</p>
            </li>
          )
        })}
      </ul>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`https://notion-api.splitbee.io/v1/table/b84d503315b24b7e8326ba6012dfddde`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  const published = data.filter(book => book.Status === 'Published')
  const reading = data.filter(book => book.Status === 'Reading')

  return {
    props: {
      published,
      reading,
    },
    revalidate: 3600,
  }
}

export default Books
