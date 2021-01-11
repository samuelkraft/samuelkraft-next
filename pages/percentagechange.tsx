import { useState } from 'react'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Input from 'components/input'
import cn from 'classnames'
import { NextSeo } from 'next-seo'
import styles from './percentagechange.module.scss'

const PercentageChange = (): JSX.Element => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  let result = null
  if (to && from) {
    const change = ((+from - +to) / +from) * 100
    const rounded = Math.round(change * 100) / 100

    if (Number.isNaN(rounded)) {
      result = '0'
    } else if (rounded === 0) {
      result = '±0'
    } else if (rounded > 0) {
      result = -rounded
    } else {
      result = `+${Math.abs(rounded)}`
    }
  }
  const title = 'Percentage change calculator'
  const description = 'What is the percentage increase or decrease?'
  return (
    <Page>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          url: `https://samuelkraft.com/books/`,
          description,
          site_name: 'Samuel Kraft',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />
      <PageHeader title={title} description={description} />
      <div className={styles.wrapper}>
        <div className={styles.fields}>
          <Input type="number" placeholder="From" onChange={e => setFrom(e.target.value)} value={from} />
          <span>to</span>
          <Input type="number" placeholder="To" onChange={e => setTo(e.target.value)} value={to} />
        </div>
        {result && <p className={cn(styles.result, result > 0 && styles.positive, result < 0 && styles.negative)}>{result} %</p>}
      </div>
    </Page>
  )
}

export default PercentageChange
