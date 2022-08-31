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
  index?: number;
  flipDirection?: "left" | "right";
};

const Photo = ({
  src,
  alt,
  meta,
  width = 350,
  height = 480,
  rotate,
  zIndex,
  index = 0,
  flipDirection,
}: PhotoProps) => {
  const fileName = `${src.src.split("/").at(-1)?.split(".")[0]}.jpg`;
  return (
    <MotionBox
      className={styles.container}
      whileHover="flipped"
      initial={{
        zIndex,
        width,
        height,
        rotate: (rotate || 0) - 20,
        y: 200 + index * 20,
        x: index % 2 === 1 ? index * 30 : -index * 30,
        opacity: 0,
      }}
      transition={{
        default: {
          duration: 1,
          ease: [0.23, 0.64, 0.13, 0.99],
          delay: index * 0.7 + 0.2,
        },
        scale: { duration: 0.2 },
      }}
      animate={{ width, height, rotate, y: 0, opacity: 1, x: 0 }}
      drag
      whileTap={{ scale: 1.1, cursor: "grabbing" }}
      whileDrag={{ scale: 1.1, cursor: "grabbing" }}
    >
      <MotionBox
        className={styles.flipper}
        borderWidth={3}
        backgroundColor="white"
        borderColor="white"
        borderStyle="solid"
        boxShadow="medium"
        borderRadius="medium"
        lineHeight="0"
        transition={{ type: "spring", duration: 0.4 }}
        variants={{
          flipped: {
            scale: 1.1,
            rotateY: flipDirection === "right" ? -180 : 180,
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
