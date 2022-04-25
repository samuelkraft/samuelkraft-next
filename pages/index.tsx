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
    <PageHeader
      title="Hi, my name is Samuel."
      description="I’m a frontend developer &amp; designer currently working at Bitrefill. This is my personal website - where you’ll find all the stuff I’m currently thinking about."
    >
      <Button href="/about">More about me</Button>
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
