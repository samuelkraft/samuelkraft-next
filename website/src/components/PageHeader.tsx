import { Stack, Text } from "design-system";
import { ReactNode } from "react";

type PageHeaderProps = {
  title: ReactNode;
  description?: ReactNode;
};

const PageHeader = ({ title, description }: PageHeaderProps) => (
  <Stack direction="column" space={3}>
    <Text as="h1">{title}</Text>
    <Text as="h2" size="base" weight="normal" color="textSecondary">
      {description}
    </Text>
  </Stack>
);

export default PageHeader;
