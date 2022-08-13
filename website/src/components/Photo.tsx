import { Box, MotionBox, Stack, Text } from "design-system";
import Image, { StaticImageData } from "next/image";
import * as styles from "./Photo.css";

type PhotoProps = {
  src: StaticImageData;
  alt: string;
  meta?: string;
  width: number;
  height: number;
  rotate?: number;
  zIndex?: number;
};

const Photo = ({
  src,
  alt,
  meta,
  width = 350,
  height = 480,
  rotate,
  zIndex,
}: PhotoProps) => {
  const fileName = `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`;
  return (
    <MotionBox
      className={styles.container}
      whileHover="flipped"
      initial={{ zIndex }}
      variants={{ flipped: { zIndex: 2 } }}
      style={{ width, height, transform: rotate ? `rotate(${rotate}deg)` : "" }}
    >
      <MotionBox
        className={styles.flipper}
        borderWidth={3}
        borderColor="white"
        borderStyle="solid"
        boxShadow="medium"
        borderRadius="medium"
        lineHeight="0"
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: 180,
            rotateX: 5,
          },
        }}
      >
        <Box className={styles.front}>
          <Image src={src} alt={alt} layout="fill" />
        </Box>
        <Box
          className={styles.back}
          display="flex"
          alignItems="center"
          paddingX={6}
        >
          <Box className={styles.photoPaper} />
          <Box zIndex="1">
            <Stack direction="column" space={3}>
              {meta && (
                <Text size="small" transform="uppercase" color="textSecondary">
                  {meta}
                </Text>
              )}
              <Text size="small" transform="uppercase" color="textSecondary">
                {fileName}
              </Text>
            </Stack>
          </Box>
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

export default Photo;
