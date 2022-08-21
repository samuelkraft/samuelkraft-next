import { Text } from "design-system";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next";
import { projects } from "..";
import type { ProjectType } from "../../components/Project";

type ProjectPageProps = {
  project: ProjectType;
};

const ProjectPage = ({ project }: ProjectPageProps) => {
  return <Text as="h1">{project.title}</Text>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = projects.map((project) => ({
    params: { slug: project.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const project = projects.find((p) => p.slug === context.params?.slug);

  return {
    props: {
      project,
    },
  };
};

export default ProjectPage;
