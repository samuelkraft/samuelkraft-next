import styles from './pageheader.module.scss'

type PageHeaderProps = {
  title: string
  description?: string
  children?: JSX.Element
}

const PageHeader = ({ title, description, children }: PageHeaderProps): JSX.Element => (
  <div className={styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
)

export default PageHeader
