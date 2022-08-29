import { ReactNode, useState } from "react";
import { Box } from "design-system";

import Container from "components/Container";
import Navigation from "components/Navigation";
import Footer from "components/Footer";
import Grain, { GrainContext } from "components/Grain";

import * as styles from "./Layout.css";

const Gradient = () => <div className={styles.gradient} />;

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
        <Grain />
        <Gradient />
        <Container width={size === "small" ? "blog" : "site"}>
          <Box zIndex="1" position="relative">
            {children}
          </Box>
        </Container>
        <Navigation />
        <Footer />
      </Box>
    </GrainContext.Provider>
  );
};

export default Layout;
