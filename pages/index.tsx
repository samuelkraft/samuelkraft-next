import { GetStaticProps } from 'next'
import { getRepos } from 'lib/github'

import Button from 'components/button'
import PageHeader from 'components/pageheader'
import Project from 'components/project'
import Page from 'components/page'
import Repo, { RepoProps } from 'components/repo'

import bitrefill from 'public/projects/bitrefill.png'
import routes from 'public/projects/routes.png'
import tracklib from 'public/projects/tracklib.png'
import { Box, Stack } from 'design-system'

const projects = [
  { title: 'Tracklib', description: 'Clear samples from real music', link: 'tracklib.com', image: tracklib },
  { title: 'Bitrefill', description: 'Live on Crypto', link: 'bitrefill.com', image: bitrefill },
  {
    title: 'Trail Routes',
    description: 'Curated running & hiking routes',
    link: 'routes.samuelkraft.com',
    github: 'github.com/samuelkraft/routes',
    image: routes,
  },
]

type HomeProps = {
  repos: RepoProps[]
}

const Home = ({ repos }: HomeProps) => (
  <Page>
    <Stack space={4}>
      <Box color="brand">hej</Box>
      <Box color="brand">hej</Box>
      <Box color="brand">hej</Box>
    </Stack>
    <PageHeader title="Hi, I'm Samuel." description="I design & build interfaces.">
      <Button href="/about">Learn more</Button>
    </PageHeader>
    <h2>Selected Projects</h2>
    {projects.map(Project)}
    <br />
    <h2>Selected Repos</h2>
    {repos.map(Repo)}
  </Page>
)

export const getStaticProps: GetStaticProps = async () => {
  const repos = await getRepos()

  return {
    props: {
      repos,
    },
    revalidate: 3600,
  }
}

export default Home
