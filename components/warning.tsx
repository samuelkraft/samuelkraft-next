import { ReactNode } from 'react'
import { AlertTriangle } from 'react-feather'

import styles from './warning.module.scss'

const Warning = ({ children }: { children: ReactNode }): JSX.Element => (
  <div className={styles.warning}>
    <AlertTriangle />
    <p className={styles.text}>{children}</p>
  </div>
)

export default Warning
