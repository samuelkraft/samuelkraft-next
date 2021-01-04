import { Star } from 'react-feather'
import styles from './rating.module.scss'

const MAX_RATING = 5

const Rating = ({ rating }: { rating: number }): JSX.Element => (
  <div className={styles.rating}>
    {Array.from(Array(MAX_RATING).keys()).map((_, i) => (
      <Star className={i < rating ? styles.filledStar : styles.star} key={String(i)} />
    ))}
  </div>
)

export default Rating
