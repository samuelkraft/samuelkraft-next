import { Box, vars } from "design-system";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const DesignBuildSticker = () => {
  return (
    <MotionBox
      display="inline-block"
      backgroundColor="brandLight"
      borderRadius="rounded"
      width="auto"
      style={{ cursor: "grab" }}
      drag
      whileTap={{ scale: 1.2, cursor: "grabbing" }}
      whileDrag={{ scale: 1.2, cursor: "grabbing" }}
      dragElastic={0.7}
      dragSnapToOrigin
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
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
    </MotionBox>
  );
};

export default DesignBuildSticker;
