type PageHeaderProps = {
  title: string
  description?: string
  children?: JSX.Element
}

const PageHeader = ({ title, description, children }: PageHeaderProps): JSX.Element => (
  <div className="mb-12 sm:mb-24">
    <h1 className="text-3xl sm:text-4xl font-extrabold mb-3 tracking-tight">{title}</h1>
    {description && <p className="mb-5 font-medium sm:text-lg">{description}</p>}
    {children}
  </div>
)

export default PageHeader
