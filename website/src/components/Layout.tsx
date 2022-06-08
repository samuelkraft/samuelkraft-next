import { Stack, Box, Spacer, Text } from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconBlog, IconHealth, IconUser, IconAvatar } from "components/Icons";
import Container from "./Container";
import { motion } from "framer-motion";
import NowPlaying from "./NowPlaying";

const links = [
  {
    name: "Work",
    url: "/",
    icon: <IconAvatar />,
  },
  {
    name: "About",
    url: "/about",
    icon: <IconUser />,
  },
  {
    name: "Blog",
    url: "/blog",
    icon: <IconBlog />,
  },
  {
    name: "Health",
    url: "/health",
    icon: <IconHealth />,
  },
];

const MotionBox = motion(Box);

const Navigation = ({ absolute }: { absolute?: boolean }) => {
  const router = useRouter();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      zIndex="1"
      position="relative"
    >
      <Box
        as="nav"
        backgroundColor="background"
        padding={2}
        borderRadius="rounded"
        position={absolute ? "absolute" : "relative"}
        top={absolute ? 7 : 0}
        marginTop={absolute ? 0 : 7}
        boxShadow="small"
      >
        <Stack space={3}>
          {links.map((link) => {
            const isOpen = router.pathname === link.url;
            return (
              <Link href={link.url} key={link.name}>
                <MotionBox
                  as="a"
                  position="relative"
                  display="flex"
                  paddingX={4}
                  paddingY={3}
                  cursor="pointer"
                  animate={{
                    color: isOpen ? vars.colors.background : vars.colors.text,
                  }}
                  transition={{ duration: 0.1 }}
                  opacity={!isOpen ? { hover: "0.75" } : "1"}
                  borderRadius="rounded"
                >
                  {isOpen ? (
                    <>
                      <MotionBox
                        backgroundColor="text"
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                        layoutId="navigation-active"
                        style={{ borderRadius: 9999 }}
                      />
                    </>
                  ) : null}
                  {link.url === "/" && <Spacer space={2} />}
                  <Box zIndex="1">
                    <Text weight="bold">{link.name}</Text>
                  </Box>
                </MotionBox>
              </Link>
            );
          })}
        </Stack>
      </Box>
    </Box>
  );
};

const Footer = () => (
  <>
    <Spacer space={9} />
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      paddingY={7}
      backgroundColor="code"
    >
      <NowPlaying />
      <Container>
        <Text color="background">&copy; Samuel Kraft</Text>
      </Container>
    </Box>
  </>
);

const Layout = ({
  children,
  full,
}: {
  children: ReactNode;
  full?: boolean;
}) => {
  if (full) {
    return (
      <Box>
        <Navigation absolute />
        {children}
        <Footer />
      </Box>
    );
  }
  return (
    <>
      <Container width="blog">
        <Navigation />
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
