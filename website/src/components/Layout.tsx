import { Box } from "design-system";
import { createContext, ReactNode, useContext, useState } from "react";
import Container from "./Container";
import * as styles from "./Layout.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

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

const Background = () => {
  const { grain } = useContext(GrainContext);
  return (
    <>
      <div className={styles.background} />
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

const Layout = ({
  children,
  size,
}: {
  children: ReactNode;
  size?: "small" | "medium";
}) => {
  const [grain, setGrain] = useState(3);
  return (
    <GrainContext.Provider
      value={{
        grain,
        setGrain,
      }}
    >
      <Box paddingTop={10}>
        <Background />
        <Container width={size === "small" ? "blog" : "site"}>
          <Box paddingTop={6}>{children}</Box>
        </Container>
        <Navigation />
        <Footer />
      </Box>
    </GrainContext.Provider>
  );
};

export default Layout;
