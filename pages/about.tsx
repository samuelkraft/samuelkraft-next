import Image from 'next/image'
import Page from 'components/page'
import Button from 'components/button'
import styles from './about.module.scss'

const About = (): JSX.Element => {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  return (
    <Page>
      <Image src="/samuelkraft.jpg" alt="Picture of me (samuel kraft)" width={1606} height={990} className={styles.image} />
      <div className={styles.text}>
        <p>Hey I’m Samuel, a frontend developer &amp; designer currently living in 🇸🇪 Stockholm, Sweden.</p>
        <p>
          Right now I’m working at{' '}
          <a href="https://www.tracklib.com/" {...linkProps}>
            Tracklib
          </a>
          , the record store for sampling. I also like to get involved with freelance projects, currently designing the future of crypto at{' '}
          <a href="https://bitrefill.com/" {...linkProps}>
            Bitrefill
          </a>
          . Before that I worked at{' '}
          <a href="https://www.styleroom.se/app" {...linkProps}>
            StyleRoom
          </a>
          , swedens leading source of interior design inspiration.
        </p>
        <p>
          I grew up in Nacka just outside of Stockholm (the perfect distance from town while living next door to amazing nature 🏕) and come
          from a background of studying Photography. I love working in the realm between design and code. Some stuff that makes me excited
          are CSS, React, Design Systems, Component Kits, UI Animation and delightful interfaces ✨.
        </p>
        <p>
          In my spare time I love the being outdoors, training and travelling with my family (check out{' '}
          <a href="https://www.instagram.com/thejetlagfamily/" {...linkProps}>
            @thejetlagfamily
          </a>{' '}
          ✈️).
        </p>
      </div>
      <Button href="mailto:samuelkraft@me.com">Contact me</Button>
    </Page>
  )
}

export default About
