import styles from './pageheader.module.scss'

type PageHeaderProps = {
  title: string | JSX.Element
  description?: string | JSX.Element
  children?: JSX.Element
  compact?: boolean
}

const PageHeader = ({ title, description, children, compact }: PageHeaderProps): JSX.Element => (
  <div className={compact ? styles.wrapperCompact : styles.wrapper}>
    <h1 className={styles.title}>{title}</h1>
    {description && <p className={styles.description}>{description}</p>}
    {children}
  </div>
)

export default PageHeader
