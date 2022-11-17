import { ReactNode } from "react";
import { IconInfo } from "./Icons";

const Warning = ({
  children,
  type,
}: {
  children: ReactNode;
  type: "warning" | "info";
}): JSX.Element => (
  <div className="flex gap-1 px-4 py-3 rounded-lg mt-7 bg-secondary">
    <IconInfo className="w-6 h-6 shrink-0" />
    <div>{children}</div>
  </div>
);

export default Warning;
