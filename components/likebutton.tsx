import { useEffect, useState } from 'react'
import { Heart } from 'react-feather'
import Button from 'components/button'
import { safeLocalStorage as localStorage } from 'lib/localstorage'

import useSWR, { mutate } from 'swr'
import fetcher from 'lib/fetcher'

import styles from './likebutton.module.scss'

const LikeButton = ({ slug }: { slug: string }): JSX.Element | null => {
  const [mounted, setMounted] = useState(false)
  const { data } = useSWR(`/api/likes?slug=${slug}`, fetcher)
  const likes = data?.likes
  const liked = localStorage.getItem(slug) === 'true'

  useEffect(() => setMounted(true), [])

  const onLike = async () => {
    localStorage.setItem(slug, 'true')
    mutate(`/api/likes?slug=${slug}`, { ...data, likes: likes + 1 }, false)
    await fetch(`/api/likes?slug=${slug}`, { method: 'POST' })
  }

  if (!mounted) return null

  return (
    <Button disabled={liked} onClick={onLike} type="button" variant="like">
      <Heart className={liked ? styles.icon : ''} /> {typeof likes === 'undefined' ? '--' : likes}
    </Button>
  )
}

export default LikeButton
