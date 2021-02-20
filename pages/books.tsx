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
  published: Array<Book>
  reading: Array<Book>
}

const Books = ({ published, reading }: BooksProps): JSX.Element => {
  const [sorting, setSorting] = useState('finished')
  const seoTitle = 'Books | Samuel Kraft'
  const seoDesc = 'This page contains books I enjoy with my notes, highlights and reviews.'
  const gridClasses = 'grid mb-12 p-0 list-none grid-cols-2 gap-6 sm:grid-cols-3 sm:gap-8'
  const bookClasses = 'min-w-0 m-0 group'
  const titleClasses = 'block mb-1 pt-3 text-xl'
  const coverClasses = 'rounded-lg transition transiton-transform duration-200 ease-out transform group-hover:-translate-y-1'
  const authorClasses = 'mb-6 font-semibold text-medium leading-7 opacity-60'
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
        {published.length > 0 && (
          <p className="-mt-4 font-medium text-medium sm:text-lg">
            <span>Sort by:</span>
            <label htmlFor="select" className="inline-flex align-center">
              <select
                value={sorting}
                onChange={(e: ChangeEvent<HTMLSelectElement>) => setSorting(e.target.value)}
                id="select"
                className="w-auto m-0 ml-4 text-brand font-medium text-medium leading-none bg-transparent border-0 outline-0 cursor-pointer appearance-none sm:text-lg"
              >
                {sortOptions.map(({ id, name }) => (
                  <option value={id} key={id}>
                    {name}
                  </option>
                ))}
              </select>
              <ChevronDown className="ml-2 stroke-current text-brand" />
            </label>
          </p>
        )}
      </PageHeader>
      <ul className={gridClasses}>
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
              <li className={bookClasses} key={id}>
                <Link href={`books/${slug}`}>
                  <a>
                    <Image src={image[0].url} width={218} height={328} className={coverClasses} />
                    <strong className={titleClasses}>{title}</strong>
                    <p className={authorClasses}>{author}</p>
                    <Rating rating={rating} />
                  </a>
                </Link>
              </li>
            )
          })}
      </ul>
      <h2>Currently reading</h2>
      <ul className={gridClasses}>
        {reading.map(({ Name: title, Author: author, Rating: rating, Image: image, id }) => {
          const slug = slugifiy(title, { lower: true })
          return (
            <li className={bookClasses} key={id}>
              <Image src={image[0].url} width={218} height={328} className={coverClasses} />
              <strong className={titleClasses}>{title}</strong>
              <p className={authorClasses}>{author}</p>
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
    revalidate: 1,
  }
}

export default Books
