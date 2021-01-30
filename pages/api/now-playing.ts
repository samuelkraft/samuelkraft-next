import { getNowPlaying } from 'lib/spotify'

type NowPlaying = {
  album: string
  albumImageUrl: string
  artist: string
  isPlaying: boolean
  songUrl: string
  title: string
}

export default async (_, res): NowPlaying => {
  const response = await getNowPlaying()

  console.log('response.status', response.status)

  if (response.status === 204 || response.status > 400) {
    return res.status(200).json({ isPlaying: false })
  }

  const song = await response.json()
  const isPlaying = song.is_playing
  const title = song.item.name
  const artist = song.item.artists.map(_artist => _artist.name).join(', ')
  const album = song.item.album.name
  const albumImageUrl = song.item.album.images[0].url
  const songUrl = song.item.external_urls.spotify

  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=30')

  return res.status(200).json({
    album,
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  })
}
