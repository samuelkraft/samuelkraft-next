import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import styles from './themechanger.module.scss'

const ThemeChanger = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className={styles.switch} /> // skeleton on server

  return (
    <label htmlFor="themeCheckbox" className={styles.switch}>
      <input
        id="themeCheckbox"
        type="checkbox"
        className={styles.input}
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
      />

      <span className={styles.slider} />
      <span className={resolvedTheme === 'dark' ? styles.iconDark : styles.iconLight}>{resolvedTheme === 'dark' ? '🌙' : '☀️'}</span>
    </label>
  )
}

export default ThemeChanger
