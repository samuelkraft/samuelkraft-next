import { Stack, Box, Spacer, Text } from "design-system";
import Link from "next/link";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import { IconBlog, IconHealth, IconUser, IconAvatar } from "components/Icons";
import Container from "./Container";

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

const Navigation = () => {
  const router = useRouter();
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Box
        as="nav"
        backgroundColor="background"
        padding={2}
        borderRadius="rounded"
        position="absolute"
        top={7}
      >
        <Stack space={3}>
          {links.map((link) => {
            const isOpen = router.pathname === link.url;
            return (
              <Link href={link.url} key={link.name}>
                <Box
                  as="a"
                  position="relative"
                  display="flex"
                  paddingX={4}
                  paddingY={3}
                  cursor="pointer"
                  color={isOpen ? "background" : "text"}
                  opacity={!isOpen ? { hover: "0.75" } : {}}
                  borderRadius="rounded"
                >
                  {isOpen ? (
                    <>
                      <Box
                        backgroundColor="text"
                        borderRadius="rounded"
                        position="absolute"
                        top={0}
                        left={0}
                        right={0}
                        bottom={0}
                      />
                      <Box position="relative" height={5}>
                        {link.icon}
                      </Box>
                      <Spacer space={2} />
                    </>
                  ) : null}
                  {link.url === "/" && <Spacer space={2} />}
                  <Box zIndex="1">
                    <Text weight="bold">{link.name}</Text>
                  </Box>
                </Box>
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
      justifyContent="center"
      paddingY={7}
      backgroundColor="code"
    >
      <Container>
        <Text color="background">&copy; Samuel Kraft</Text>
      </Container>
    </Box>
  </>
);

const Layout = ({ children }: { children: ReactNode }) => (
  <Box>
    <Navigation />
    {children}
    <Footer />
  </Box>
);

export default Layout;
