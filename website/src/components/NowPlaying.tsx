import useSWR from "swr";
import fetcher from "lib/fetcher";
import Image from "next/image";
import { Box } from "design-system";

const truncate = (str: string, num: number) => {
  if (str.length > num) {
    return `${str.slice(0, num)}…`;
  }
  return str;
};

export const NowPlayingIcon = ({
  albumImageUrl,
}: {
  albumImageUrl?: string;
}) => (
  <Box position="relative">
    <span />
    <span />
    <span />
    {/* {albumImageUrl && (
      <Box
        position="absolute"
        inset={0}
        overflow="hidden"
        borderRadius="medium"
      >
        <Image src={albumImageUrl} width={13} height={13} alt="Album cover" />
      </Box>
    )} */}
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
          <NowPlayingIcon albumImageUrl={data.albumImageUrl} />
          {truncate(nowPlaying, 46)}
        </Box>
      ) : (
        <Box opacity="0">Not playing</Box>
      )}
    </Box>
  );
};

export default NowPlaying;
