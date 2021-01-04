import { useState, ChangeEvent } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Rating from 'components/rating'
import { ChevronDown } from 'react-feather'
import styles from './books.module.scss'

export const books = [
  {
    title: 'Deep',
    author: 'James Nestor',
    rating: 4,
    slug: 'deep',
    date_finished: 'Apr 11, 2016',
  },
  {
    title: 'The 4-hour work week',
    author: 'Tim Ferris',
    rating: 5,
    slug: '4-hour-work-week',
    date_finished: 'Jul 18, 2006',
  },
  {
    title: 'Vagabonding',
    author: 'Rolf Potts',
    rating: 3,
    slug: 'vagabonding',
    date_finished: 'Dec 11, 2020',
  },
]

const sortOptions = [
  { id: 'finished', name: 'Date finished' },
  { id: 'rating', name: 'Rating' },
]

const Books = (): JSX.Element => {
  const [sorting, setSorting] = useState('finished')
  return (
    <Page>
      <PageHeader title="Books">
        <p className={styles.pageDescription}>
          This page contains books I enjoy with my notes, highlights and reviews sorted by:
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
      </PageHeader>
      <ul className={styles.grid}>
        {books
          .sort((a, b) => {
            if (sorting === 'finished') {
              return new Date(b.date_finished).getTime() - new Date(a.date_finished).getTime()
            }
            return b.rating - a.rating
          })
          .map(({ title, author, rating, slug }) => (
            <li className={styles.book} key={title}>
              <Link href={`books/${slug}`}>
                <a>
                  <Image src={`/books/${slug}.jpg`} width={218} height={328} className={styles.cover} />
                  <strong className={styles.title}>{title}</strong>
                  <p className={styles.author}>{author}</p>
                  <Rating rating={rating} />
                </a>
              </Link>
            </li>
          ))}
      </ul>
    </Page>
  )
}

export default Books
