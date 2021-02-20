import Image from 'next/image'
import Page from 'components/page'
import Button from 'components/button'
import { NextSeo } from 'next-seo'

const About = (): JSX.Element => {
  const seoTitle = 'About Samuel Kraft'
  const pClasses = 'font-medium text-medium leading-7'
  const linkProps = {
    target: '_blank',
    rel: 'noopener noreferrer',
    className: 'text-brand transition duration-200 transition-colors ease-out hover:text-brandActive focus:text-brandActive',
  }

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        openGraph={{
          title: seoTitle,
          url: `https://samuelkraft.com/about/`,
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <Image src="/samuelkraft.jpg" alt="Picture of me (samuel kraft)" width={1606} height={990} className="rounded-xl" priority />
      <div className="mb-8 pt-8">
        <p className={pClasses}>Hey I’m Samuel, a frontend developer &amp; designer currently living in 🇸🇪 Stockholm, Sweden.</p>
        <p className={pClasses}>
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
        <p className={pClasses}>
          I grew up in Nacka just outside of Stockholm (the perfect distance from town while living next door to amazing nature 🏕) and come
          from a background of studying Photography. I love working in the realm between design and code. Some stuff that makes me excited
          are CSS, React, Design Systems, Component Kits, UI Animation and delightful interfaces ✨.
        </p>
        <p className={pClasses}>
          In my spare time I love being outdoors, training and travelling with my family (check out{' '}
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
