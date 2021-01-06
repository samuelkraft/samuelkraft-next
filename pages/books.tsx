import { GetStaticProps } from 'next'
import { useState, ChangeEvent } from 'react'
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
  books: Array<Book>
}

const Books = ({ books }: BooksProps): JSX.Element => {
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
        {books.length > 1 && (
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
        {books
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
                    <Image src={image[0].url} width={218} height={328} className={styles.cover} layout="responsive" />
                    <strong className={styles.title}>{title}</strong>
                    <p className={styles.author}>{author}</p>
                    <Rating rating={rating} />
                  </a>
                </Link>
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
  const books = data.filter(book => book.Published)

  return {
    props: {
      books,
    },
    revalidate: 1,
  }
}

export default Books
