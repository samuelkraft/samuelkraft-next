import { Box, Button, Stack } from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { IconBlog, IconHome, IconTheme, IconUser } from "./Icons";

import * as styles from "./Navigation.css";

const links = [
  {
    name: "Home",
    url: "/",
    icon: <IconHome />,
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
];

const ThemeButton = () => {
  return (
    <Button variant="transparent">
      <IconTheme />
    </Button>
  );
};

const MotionBox = motion(Box);

const Navigation = () => {
  const router = useRouter();
  return (
    <Box
      className={styles.wrapper}
      as="nav"
      backgroundColor="background"
      padding={2}
      borderRadius="rounded"
      boxShadow="medium"
      position="fixed"
      zIndex="1"
      bottom={6}
    >
      <Stack space={3} align="center">
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
                  color: isOpen ? vars.colors.brand : vars.colors.text,
                }}
                transition={{ duration: 0.1 }}
                opacity={!isOpen ? { hover: "0.75" } : "1"}
                borderRadius="rounded"
              >
                {isOpen ? (
                  <>
                    <MotionBox
                      backgroundColor="brandLight"
                      position="absolute"
                      top={0}
                      left={0}
                      right={0}
                      bottom={0}
                      borderRadius="rounded"
                      layoutId="navigation-active"
                    />
                  </>
                ) : null}
                <Box zIndex="1">{link.icon}</Box>
              </MotionBox>
            </Link>
          );
        })}
        <Box width={1} height={6} backgroundColor="border" />
        <ThemeButton />
      </Stack>
    </Box>
  );
};

export default Navigation;
