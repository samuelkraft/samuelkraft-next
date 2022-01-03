import { Box } from 'components'

type PageHeaderProps = {
  title: string | JSX.Element
  description?: string | JSX.Element
  children?: JSX.Element
  compact?: boolean
}

const PageHeader = ({ title, description, children, compact }: PageHeaderProps): JSX.Element => (
  <Box marginBottom={compact ? { small: 'none', medium: 'xlarge' } : { small: 'xxlarge', medium: 'xxxlarge' }}>
    <Box as="h1" fontSize={{ small: 'h2', medium: 'h1' }} marginBottom={{ small: 'small', medium: 'medium' }} letterSpacing="-0.3px">
      {title}
    </Box>
    {description && (
      <Box as="p" fontSize={{ small: 'base', medium: 'large' }} fontWeight="medium" marginBottom="xlarge" opacity="0.75" lineHeight="1.5">
        {description}
      </Box>
    )}
    {children}
  </Box>
)

export default PageHeader
