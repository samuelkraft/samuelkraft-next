import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import * as styles from "./CodeBlock.css";
import * as dscomponents from "design-system/src";

type CodeProps = {
  code: string;
  live?: boolean;
};

const Code = ({ code, live }: CodeProps) => (
  <LiveProvider code={code} scope={dscomponents}>
    {live && <LivePreview className={styles.preview} />}
    <LiveEditor className={styles.editor} />
    {live && (
      <p style={{ color: "red" }}>
        <LiveError />
      </p>
    )}
  </LiveProvider>
);

type CodeBlockProps = {
  children: string;
  live?: boolean;
};

const CodeBlock = ({ children, live }: CodeBlockProps) => {
  return (
    <div className={styles.wrapper}>
      <Code code={children} live={live} />
    </div>
  );
};

export default CodeBlock;
