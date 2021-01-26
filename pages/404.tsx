import Head from 'next/head'
import Page from 'components/page'
import PageHeader from 'components/pageheader'
import Button from 'components/button'

const Custom404 = (): JSX.Element => (
  <Page>
    <Head>
      <title>404 | Samuel Kraft</title>
    </Head>
    <PageHeader
      title="404 - Page not found"
      description="Uh oh! This page does not exists, maybe you clicked an old link or misspelled. Please try again…"
    >
      <Button href="/">Return home</Button>
    </PageHeader>
  </Page>
)

export default Custom404
