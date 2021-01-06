import Button from 'components/button'
import PageHeader from 'components/pageheader'
import Project from 'components/project'
import Page from 'components/page'
import styles from './index.module.scss'

const Home = (): JSX.Element => (
  <Page>
    <PageHeader
      title="Hi, my name is Samuel."
      description="I’m a frontend developer &amp; designer. Right now I’m working at Tracklib. This is my personal website - where you’ll find all the stuff I’m currently doing and thinking about."
    >
      <Button href="/about">More about me</Button>
    </PageHeader>
    <h2>Projects</h2>
    <Project
      title="Tracklib"
      description="Clear samples from real music"
      link="tracklib.com"
      image="/projects/tracklib.png"
      imageWidth={1400}
      imageHeight={636}
    />
    <Project
      title="Bitrefill"
      description="Live on Crypto"
      link="bitrefill.com"
      image="/projects/bitrefill.png"
      imageWidth={1396}
      imageHeight={676}
    />
    <div className={styles.grid}>
      <Project
        title="StyleRoom"
        description="Swedens largest source of interior design inspiration"
        link="styleroom.se/app"
        image="/projects/styleroom.png"
        imageWidth={972}
        imageHeight={702}
        small
      />
      <Project
        title=" Watch Strength"
        description="Your personal strength tracker"
        link="samuelkraft.github.io/strength"
        linkText="Visit project"
        image="/projects/strength.png"
        imageWidth={940}
        imageHeight={858}
        small
      />
      <Project
        title="Eventomatic"
        description="Connecting brands with fans"
        link="eventomatic.se"
        image="/projects/eventomatic.png"
        imageWidth={436}
        imageHeight={520}
        small
      />
      <Project
        title="The Jet Lag Family"
        description="My small family’s travel blog"
        link="thejetlagfamily.com"
        image="/projects/jetlag.png"
        imageWidth={650}
        imageHeight={614}
        small
      />
    </div>
  </Page>
)

export default Home
