import { Box, Text } from "design-system";
import Image from "next/image";

type CustomImageProps = {
  src: string;
  width: number;
  height: number;
  alt: string;
  caption?: string;
  layout?: "intrinsic" | "fixed" | "responsive";
};
const CustomImage = ({
  src,
  width,
  height,
  alt,
  caption,
  layout = "intrinsic",
}: CustomImageProps): JSX.Element => (
  <Box as="figure" marginTop={5} marginBottom={4} textAlign="center">
    <Box display="inline-block" textAlign="left">
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        layout={layout}
      />
      {caption && (
        <Text as="figcaption" size="base" color="textSecondary">
          {caption}
        </Text>
      )}
    </Box>
  </Box>
);

export default CustomImage;
