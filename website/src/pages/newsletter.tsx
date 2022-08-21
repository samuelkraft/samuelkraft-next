import PageHeader from "components/PageHeader";
import Subscribe from "components/Subscribe";
import { Box, Stack, Text } from "design-system";
import { GetStaticProps } from "next";
import { NextSeo } from "next-seo";

import styles from "./newsletter.module.scss";

const NewsletterPage = (): JSX.Element => {
  const seoTitle = "Newsletter | Samuel Kraft";
  const seoDesc =
    "A newsletter in the realm between design & development. Learn animations, CSS, web development tips & tricks and creating delightful and useful interfaces!";

  return (
    <Stack direction="column" space={9}>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/newsletter/`,
          description: seoDesc,
          site_name: "Samuel Kraft",
          images: [
            {
              url: "https://samuelkraft.com/newsletter.png",
              alt: "A newsletter in the realm between design & development",
            },
          ],
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />

      <PageHeader
        title="Newsletter"
        description={
          <Stack direction="column" space={4}>
            <Text>
              A newsletter in the realm between
              <Box as="em">design &amp; development</Box>. Learn animations,
              CSS, web development tips &amp; tricks and creating delightful and
              useful interfaces!
            </Text>
            <Text>No spam, unsubcribe at any time!</Text>
          </Stack>
        }
      />
      <Subscribe header={false} />
    </Stack>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: { layout: "small" },
  };
};

export default NewsletterPage;
