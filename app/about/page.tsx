import Button from 'components/button'
import Image from 'next/image'
import me from 'public/samuelkraft.jpg'
import styles from './about.module.scss'

function About() {
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
  }
  return (
    <>
      <Image src={me} alt="Picture of me (samuel kraft)" placeholder="blur" className={styles.image} priority />
      <div className={styles.text}>
        <p>Hey I’m Samuel, a frontend developer &amp; designer currently living in 🇸🇪 Stockholm, Sweden.</p>
        <p>
          Right now I’m working at{' '}
          <a href="https://bitrefill.com/" {...linkProps}>
            Bitrefill
          </a>
          , designing &amp; building the future of crypto. Before that I worked at{' '}
          <a href="https://www.tracklib.com/" {...linkProps}>
            Tracklib
          </a>
          , the record store for sampling.
        </p>
        <p>
          I grew up in Nacka just outside of Stockholm (the perfect distance from town while living next door to amazing nature 🏕) and come
          from a background of studying Photography. I love working in the realm between design and code. Some stuff that makes me excited
          are CSS, React, Design Systems, Component Kits, UI Animation and delightful interfaces ✨.
        </p>
        <p>
          In my spare time I love being outdoors, training and travelling with my family (check out{' '}
          <a href="https://www.instagram.com/thejetlagfamily/" {...linkProps}>
            @thejetlagfamily
          </a>{' '}
          ✈️).
        </p>
      </div>
      <Button href="mailto:samuelkraft@me.com">Contact me</Button>
    </>
  )
}

export default About
