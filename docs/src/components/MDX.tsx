import CodeBlock from "./CodeBlock";
import PropsTable from "./PropsTable";
import * as dscomponents from "design-system";

export const components = {
  code: (props: any) => <CodeBlock {...props} />,
  /* Custom pre component to prevent meta attributes on the pre tag*/
  pre: (props: any) => (
    <pre style={{ fontFamily: "inherit" }}>{props.children}</pre>
  ),
  PropsTable,
  ...dscomponents,
};
