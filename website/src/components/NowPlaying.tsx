import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Box, Spacer } from "design-system";
import * as styles from "./NowPlaying.css";

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}…`;
  }
  return str;
};

export const NowPlayingIcon = () => (
  <Box
    position="relative"
    display="inline-flex"
    justifyContent="space-between"
    width={4}
    height={4}
  >
    <span className={styles.bar} />
    <span className={styles.bar} />
    <span className={styles.bar} />
  </Box>
);

const NowPlaying = () => {
  const { data } = useSWR("/api/now-playing", fetcher);
  const nowPlaying = `${data?.title} - ${data?.artist}`;
  return (
    <Box textAlign="center">
      {data?.isPlaying ? (
        <Box
          as="a"
          display="inline-flex"
          alignItems="center"
          backgroundColor="card"
          href={data?.songUrl}
          target="_blank"
          rel="noreferrer noopener"
          title={`Currently playing on Spotify: ${nowPlaying}`}
        >
          <NowPlayingIcon />
          <Spacer space={3} />
          {truncate(nowPlaying, 46)}
        </Box>
      ) : (
        <Box opacity="0">Not playing</Box>
      )}
    </Box>
  );
};

export default NowPlaying;
