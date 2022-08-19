import { Box, linkStyle } from "design-system";
import cn from "classnames";
import NextLink from "next/link";

type LinkProps = {
  href: string;
  children?: React.ReactNode;
  className?: string;
  unstyled?: boolean;
};

const Link = ({
  href,
  children,
  className: classNameProp,
  unstyled,
  ...props
}: LinkProps) => {
  const className = cn(classNameProp, !unstyled && linkStyle);
  if (!href.startsWith("/")) {
    return (
      <Box
        as="a"
        className={className}
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        {...props}
      >
        {children}
      </Box>
    );
  }
  return (
    <NextLink href={href}>
      <Box as="a" className={className} {...props}>
        {children}
      </Box>
    </NextLink>
  );
};

export default Link;
