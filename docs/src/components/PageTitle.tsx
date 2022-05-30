import { Stack } from "design-system/src";
import * as styles from "./PageTitle.css";

type PageTitleProps = {
  title: string;
  description: string;
  link?: string;
};

const PageTitle = ({ title, description, link }: PageTitleProps) => (
  <Stack orientation="vertical" space={2}>
    <Stack orientation="horizontal" space={2} justify="between" align="center">
      <h1 className={styles.title}>{title}</h1>
      {link ? <a href={link}>View source on GitHub</a> : <div />}
    </Stack>
    <p className={styles.description}>{description}</p>
  </Stack>
);

export default PageTitle;
