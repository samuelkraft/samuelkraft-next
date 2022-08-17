import {
  Box,
  Button,
  MotionBox,
  Popover,
  Select,
  Slider,
  Stack,
  Text,
} from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";
import { IconBlog, IconHome, IconTheme, IconUser } from "./Icons";
import { GrainContext } from "./Layout";

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

const appearances = ["Auto", "Light", "Dark"];

const ThemeButton = () => {
  const [appearance, setAppearance] = useState(appearances[0]);
  const { grain, setGrain } = useContext(GrainContext);
  return (
    <Popover>
      <Popover.Trigger asChild>
        <Button variant="transparent">
          <IconTheme />
        </Button>
      </Popover.Trigger>
      <Popover.Content>
        <Stack space={5} direction="column">
          <Stack space={3}>
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <Button>7</Button>
          </Stack>
          <Stack space={5} align="center">
            <Text as="label" color="textSecondary">
              Grain
            </Text>
            <Slider
              min={1}
              max={5}
              value={[grain]}
              onValueChange={(value: number[]) => setGrain(+value)}
            />
          </Stack>
          <Stack space={4} align="center" justify="space-between">
            <Text as="label" color="textSecondary">
              Appearance
            </Text>
            <Select
              value={appearance}
              onChange={(e) => setAppearance(e.target.value)}
            >
              {appearances.map((theme) => (
                <option key={theme}>{theme}</option>
              ))}
            </Select>
          </Stack>
        </Stack>
      </Popover.Content>
    </Popover>
  );
};

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
