import { Box, Stack, Text } from "design-system";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { allProjects, Project as ProjectType } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import { vars } from "design-system/src/styles/vars.css";
import MDXComponents from "components/MDXComponents";

type ProjectPageProps = {
  project: ProjectType;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  const MDXContent = useMDXComponent(project.body.code, {
    vars,
  });
  const { title, summary } = project;
  return (
    <Stack as="article" direction="column" space={9}>
      <Box
        as="header"
        backgroundColor="black"
        marginTop="-10"
        marginX={{ small: "-6", medium: "-7" }}
        paddingX={{ small: 6, medium: 7 }}
        paddingY={10}
      >
        <Text as="h1" color="white">
          {title}
        </Text>
        <Text as="h2" color="white">
          {summary}
        </Text>
      </Box>
      <Stack direction="column" space={7} align="flex-start">
        {/* Stack requires multiple children and doesn't know MDXContent renders that */}
        <></>
        <MDXContent components={MDXComponents} />
      </Stack>
    </Stack>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = allProjects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = allProjects.find((p) => p.slug === context.params?.slug);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
