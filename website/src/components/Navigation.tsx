import {
  Box,
  Button,
  MotionBox,
  Popover,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Text,
  Tooltip,
} from "design-system";
import { vars } from "design-system/src/styles/vars.css";
import Link from "components/Link";
import { useRouter } from "next/router";
import { forwardRef, useContext, useState } from "react";
import { IconBlog, IconHome, IconTheme, IconUser } from "./Icons";
import { GrainContext } from "components/Grain";

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
const accents = ["Blue", "Red", "Green", "Yellow", "Purple", "Pink", "Rainbow"];

const ButtonWithTooltip = forwardRef((props, ref) => (
  <Tooltip content={props.content}>
    <Button {...props} ref={ref} />
  </Tooltip>
));

ButtonWithTooltip.displayName = "ButtonWithTooltip";

const ThemeButton = () => {
  const [appearance, setAppearance] = useState(appearances[0]);
  const { grain, setGrain } = useContext(GrainContext);
  return (
    <Popover>
      <Popover.Trigger asChild>
        <ButtonWithTooltip content="Theme" variant="transparent">
          <IconTheme />
        </ButtonWithTooltip>
      </Popover.Trigger>
      <Popover.Content>
        <Stack space={5} direction="column">
          <Stack space={7} direction="column">
            <RadioGroup defaultValue={accents[0]}>
              <Stack space={4}>
                {accents.map((accent) => (
                  <Tooltip content={accent} key={accent}>
                    <RadioGroup.Item value={accent} />
                  </Tooltip>
                ))}
              </Stack>
            </RadioGroup>
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
      backgroundColor="backgroundOpaque"
      padding={3}
      borderRadius={{ small: "none", medium: "rounded" }}
      boxShadow={{ small: "border", medium: "medium" }}
      position="fixed"
      zIndex="1"
      width={{ small: "full", medium: "auto" }}
      bottom={{ small: 0, medium: 6 }}
    >
      <Stack
        space={3}
        align="center"
        justify={{ small: "space-around", medium: "center" }}
      >
        {links.map((link) => {
          const isOpen =
            link.url == "/"
              ? router.pathname === link.url
              : router.pathname.startsWith(link.url);
          return (
            <Tooltip key={link.name} content={link.name}>
              <Box>
                <Link href={link.url}>
                  <MotionBox
                    as="span"
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
              </Box>
            </Tooltip>
          );
        })}
        <Box width={1} height={6} backgroundColor="border" />
        <ThemeButton />
      </Stack>
    </Box>
  );
};

export default Navigation;
