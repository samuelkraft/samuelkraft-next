import { Box, MotionBox, vars } from "design-system";
import Grain from "./Grain";

const DesignBuildSticker = () => {
  return (
    <MotionBox
      display="inline-block"
      backgroundColor="brandLight"
      borderRadius="rounded"
      width="auto"
      position="relative"
      style={{ cursor: "grab" }}
      overflow="hidden"
      drag
      whileTap={{ scale: 1.2, cursor: "grabbing" }}
      whileDrag={{ scale: 1.2, cursor: "grabbing" }}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: "spring", bounce: 0.5, duration: 0.8 }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 500 500"
        width="105"
        height="105"
      >
        <title>Design &amp; Build Sticker</title>
        <defs>
          <path
            d="M50,250c0-110.5,89.5-200,200-200s200,89.5,200,200s-89.5,200-200,200S50,360.5,50,250"
            id="textcircle"
          >
            <animateTransform
              attributeName="transform"
              begin="0s"
              dur="30s"
              type="rotate"
              from="0 250 250"
              to="360 250 250"
              repeatCount="indefinite"
            />
          </path>
        </defs>
        <Box
          as="text"
          fontSize="huge"
          fontWeight="bold"
          /* Kinda hacky way of adding svg-specific props not allowed on <Box /> natively */
          {...{
            dy: 70,
            textLength: 1220,
            fill: vars.colors.brand,
          }}
        >
          <textPath xlinkHref="#textcircle">DESIGN → BUILD →&nbsp;</textPath>
        </Box>
      </svg>
      <Grain variant="absolute" />
    </MotionBox>
  );
};

export default DesignBuildSticker;
