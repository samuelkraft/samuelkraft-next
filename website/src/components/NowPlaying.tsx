import useSWR from "swr";
import fetcher from "lib/fetcher";
import { Box, MotionBox, Spacer, Stack, Text } from "design-system";
import * as styles from "./NowPlaying.css";
import { SpotifyLogo } from "./Icons";
import { motion } from "framer-motion";

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

  if (!data?.isPlaying) {
    return null;
  }
  return (
    <MotionBox
      as="a"
      padding={4}
      borderWidth={3}
      borderColor="white"
      borderStyle="solid"
      boxShadow="medium"
      borderRadius="medium"
      backgroundColor="background"
      marginX="auto"
      href={data?.songUrl}
      target="_blank"
      rel="noreferrer noopener"
      title={`Currently playing on Spotify: ${nowPlaying}`}
      style={{ width: 380 }}
      initial={{ rotate: 2 }}
      whileHover={{ y: -2 }}
    >
      <Stack align="center" justify="space-between" space={3}>
        <Box width="full" minWidth={0}>
          <Stack direction="column">
            <Stack align="center" space={3}>
              <NowPlayingIcon />
              <Text color="textSecondary" size="small" ellipsis>
                Currently playing
              </Text>
            </Stack>

            <Text weight="bold" ellipsis>
              {truncate(nowPlaying, 46)}
            </Text>
          </Stack>
        </Box>
        <SpotifyLogo width={32} height={32} />
      </Stack>
    </MotionBox>
  );
};

export default NowPlaying;
