import Image from 'next/image'
import { useRouter } from 'next/router'

import Rating from 'components/rating'
import Page from 'components/page'
import { books } from 'pages/books'

import styles from './book.module.scss'

const Book = (): JSX.Element => {
  const router = useRouter()
  const { slug } = router.query
  const book = books.find(b => b.slug === slug)

  if (!book) {
    return (
      <Page>
        <>404 No such book</>
      </Page>
    )
  }

  const { title, author, rating } = book

  return (
    <Page>
      <header className={styles.header}>
        <Image src={`/books/${slug}.jpg`} width={218} height={328} className={styles.cover} />
        <div className={styles.meta}>
          <strong className={styles.title}>{title}</strong>
          <p className={styles.author}>{author}</p>

          <dl>
            <dt>Rating</dt>
            <dd>
              <Rating rating={rating} />
            </dd>
            <dt>Author</dt>
            <dd>{author}</dd>
          </dl>
        </div>
      </header>
    </Page>
  )
}

export default Book
