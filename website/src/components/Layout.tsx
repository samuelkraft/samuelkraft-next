import { Box } from "design-system";
import { ReactNode } from "react";
import Container from "./Container";
import * as styles from "./Layout.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Background = () => <div className={styles.background} />;

const Layout = ({
  children,
  size,
}: {
  children: ReactNode;
  size?: "small" | "medium";
}) => {
  return (
    <Box paddingTop={10}>
      <Background />
      <Container width={size === "small" ? "blog" : "site"}>
        <Box paddingTop={6}>{children}</Box>
      </Container>
      <Navigation />
      <Footer />
    </Box>
  );
};

export default Layout;
