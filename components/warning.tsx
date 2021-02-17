import { ReactNode } from 'react'
import { AlertTriangle, Info } from 'react-feather'

import styles from './warning.module.scss'

const Warning = ({ children, type }: { children: ReactNode; type: 'warning' | 'info' }): JSX.Element => (
  <div className={styles.warning}>
    {type === 'info' ? <Info /> : <AlertTriangle />}
    <p className={styles.text}>{children}</p>
  </div>
)

export default Warning
