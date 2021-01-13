import { GetStaticProps, GetStaticPaths } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import slugify from 'slugify'
import 'react-notion/src/styles.css'
import { NotionRenderer } from 'react-notion'
import { Link } from 'react-feather'
import { NextSeo } from 'next-seo'

import Rating from 'components/rating'
import Page from 'components/page'
import Button from 'components/button'

import type { Book as BookType } from 'pages/books'

import styles from './book.module.scss'

type BookProps = {
  book: BookType
  page: any // eslint-disable-line
}

const Book = ({ book, page }: BookProps): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query

  if (!book) {
    return (
      <Page>
        <>404 No such book</>
      </Page>
    )
  }

  const { Name: title, Author: author, Rating: rating, Fiction: fiction, Date: date, Link: link, Genres: genres, Image: image } = book
  const formattedDate = new Date(date).toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
  })

  const seoTitle = `${title} book review - Samuel Kraft`
  const seoDesc = `${title} by {author} book review, notes and thoughts`

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/books/${slug}`,
          description: seoDesc,
          images: [
            {
              url: image[0].url,
              alt: `${title} book cover`,
            },
          ],
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <header className={styles.header}>
        <Image src={image[0].url} width={218} height={328} className={styles.cover} />
        <div className={styles.meta}>
          <strong className={styles.title}>{title}</strong>
          <p className={styles.author}>{author}</p>

          <dl className={styles.metaList}>
            <dt>Non Fiction?</dt>
            <dd>
              <input type="checkbox" checked={!fiction} className={styles.checkbox} readOnly />
            </dd>
            <dt>Genres</dt>
            <dd>
              {genres.map(genre => (
                <span className={styles.genre} key={genre}>
                  {genre}
                </span>
              ))}
            </dd>
            <dt>Rating</dt>
            <dd>
              <Rating rating={rating} />
            </dd>
            <dt>Date finished</dt>
            <dd>{formattedDate}</dd>
          </dl>
          {link && (
            <Button href={link} variant="transparent">
              <>
                Get it on Amazon <Link />
              </>
            </Button>
          )}
        </div>
      </header>
      <div className={styles.post}>{page && <NotionRenderer blockMap={page} />}</div>
    </Page>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const bookRes = await fetch(`https://notion-api.splitbee.io/v1/table/b84d503315b24b7e8326ba6012dfddde`)
  const bookData = await bookRes.json()
  const paths = bookData.filter(book => book.Status === 'Published').map(b => `/books/${slugify(b.Name, { lower: true })}`)

  return {
    paths,
    fallback: false,
  }
}
export const getStaticProps: GetStaticProps = async context => {
  const bookRes = await fetch(`https://notion-api.splitbee.io/v1/table/b84d503315b24b7e8326ba6012dfddde`)
  const bookData = await bookRes.json()

  const pageRes = await fetch(`https://notion-api.splitbee.io/v1/page/b4f80f98-e06d-4672-b8af-a52ebb48894a`)
  const pageData = await pageRes.json()

  if (!bookData || !pageData) {
    return {
      notFound: true,
    }
  }

  const { slug } = context.params
  const book = bookData.find(b => slugify(b.Name, { lower: true }) === slug)

  return {
    props: {
      book,
      page: pageData,
    },
    revalidate: 1,
  }
}

export default Book
