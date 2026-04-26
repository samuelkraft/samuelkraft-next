import NextLink, { LinkProps as NextLinkProps } from "next/link";
import cn from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
  unstyled?: boolean;
} & NextLinkProps;

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, unstyled, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={cn(
        !unstyled && (isExternal || underline) && "underline underline-offset-2 decoration-dotted hover:decoration-solid",

        props.className
      )}
      target={isExternal ? "_blank" : undefined}
    >
      {props.children}
    </NextLink>
  );
}
