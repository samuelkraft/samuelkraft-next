import Box from 'components/Box/Box'
import Button from 'components/Button/Button'
import Page from 'components/page'
import Stack from 'components/Stack/Stack'

const Components = () => {
  return (
    <Page>
      <Box paddingX="large" backgroundColor="brand" color="text">
        hello
      </Box>
      <Stack space="medium" direction="vertical">
        <Button size="large">Hello world!</Button>
        <Button size="medium">Hello world!</Button>
        <Button size="small">Hello world!</Button>
        <Button size="small" variant="primary" width="full">
          Hello world!
        </Button>
        <Button size="small" variant="transparent">
          Hello world!
        </Button>
      </Stack>
    </Page>
  )
}

export default Components
