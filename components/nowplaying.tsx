import useSWR from 'swr'
import fetcher from 'lib/fetcher'
import Image from 'next/image'
import styles from './nowplaying.module.scss'

const truncate = (str, num) => {
  if (str.length > num) {
    return `${str.slice(0, num)}…`
  }
  return str
}

const NowPlaying = (): JSX.Element => {
  const { data } = useSWR('/api/now-playing', fetcher)
  const nowPlaying = `${data?.title} - ${data?.artist}`
  return (
    <div className={styles.wrapper}>
      {data?.isPlaying ? (
        <a
          className={styles.widget}
          href={data?.songUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Currently playing on Spotify: ${nowPlaying}`}
        >
          <div className={styles.icon}>
            <span />
            <span />
            <span />
            <div className={styles.cover}>
              <Image src={data.albumImageUrl} width={13} height={13} />
            </div>
          </div>
          {truncate(nowPlaying, 50)}
        </a>
      ) : (
        <span className={styles.widgetHidden}>Not playing</span>
      )}
    </div>
  )
}

export default NowPlaying
