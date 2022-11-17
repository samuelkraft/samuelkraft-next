import NextLink, { LinkProps as NextLinkProps } from "next/link";
import cn from "clsx";
import { ReactNode } from "react";

type LinkProps = {
  children: ReactNode;
  className?: string;
  underline?: boolean;
} & NextLinkProps;

export default function Link(props: LinkProps) {
  const isExternal = !props.href.toString().startsWith("/");
  const { underline, ...rest } = props;
  return (
    <NextLink
      {...rest}
      className={cn(
        (isExternal || underline) && "underline underline-offset-4",
        props.className
      )}
      target={isExternal ? "_blank" : undefined}
    >
      {props.children}
    </NextLink>
  );
}
