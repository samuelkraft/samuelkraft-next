import Button from 'components/button'
import PageHeader from 'components/pageheader'
import Project from 'components/project'
import Page from 'components/page'

import bitrefill from 'public/projects/bitrefill.png'
import routes from 'public/projects/routes.png'
import tracklib from 'public/projects/tracklib.png'

const projects = [
  { title: 'Tracklib', description: 'Clear samples from real music', link: 'tracklib.com', image: tracklib },
  { title: 'Bitrefill', description: 'Live on Crypto', link: 'bitrefill.com', image: bitrefill },
  { title: 'Trail Routes', description: 'Curated running & hiking routes', link: 'routes.samuelkraft.com', image: routes },
]

const Home = (): JSX.Element => (
  <Page>
    <PageHeader
      title="Hi, my name is Samuel."
      description="I’m a frontend developer &amp; designer currently working at Bitrefill. This is my personal website - where you’ll find all the stuff I’m currently thinking about."
    >
      <Button href="/about">More about me</Button>
    </PageHeader>
    <h2>Selected Projects</h2>
    {projects.map(project => (
      <Project key={project.title} {...project} />
    ))}
  </Page>
)

export default Home
