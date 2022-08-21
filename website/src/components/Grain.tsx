import { Box } from "design-system";
import { createContext, useContext } from "react";
import cn from "classnames";
import * as styles from "./Grain.css";

type GrainContextType = {
  grain: number;
  setGrain: (grain: number) => void;
};

export const GrainContext = createContext<GrainContextType>({
  grain: 3,
  setGrain: () => {},
});

const getStrength = (grain: number) => {
  switch (grain) {
    case 1:
      return 0.9;
    case 2:
      return 0.8;
    case 3:
      return 0.7;
    case 4:
      return 0.6;
    case 5:
      return 0.4;
  }
};

type GrainProps = {
  variant?: "absolute" | "fixed";
};

const Grain = ({ variant }: GrainProps) => {
  const { grain } = useContext(GrainContext);
  return (
    <>
      <Box
        className={cn(styles.grain, variant === "absolute" && styles.absolute)}
        position={variant === "absolute" ? "absolute" : "fixed"}
        top={0}
        left={0}
        width={variant === "absolute" ? "full" : "viewWidth"}
        height="full"
        backgroundColor="background"
      />
      <svg
        width="0"
        height="0"
        viewBox="0 0 0 0"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="backgroundNoise">
          <feTurbulence
            type="fractalNoise"
            baseFrequency={getStrength(grain)}
            numOctaves="1"
            stitchTiles="stitch"
          />
          <feColorMatrix
            type="matrix"
            values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 0.5 0"
          />
          <feBlend in="SourceGraphic" mode="overlay" />
          <feComposite in2="SourceAlpha" operator="in" />
        </filter>
      </svg>
    </>
  );
};

export default Grain;
