import { useEffect, useState, Fragment } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import styles from './themechanger.module.scss'

const variants = ['light', 'dark', 'system']

const getIcon = variant => {
  if (variant === 'light') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26">
        <g fill="none" fillRule="evenodd" stroke="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
          <g fill="currentColor" stroke="currentColor" strokeWidth="2" transform="translate(-1045 -55)">
            <g transform="translate(1046 56)">
              <path d="M12 17.455a5.455 5.455 0 100-10.91 5.455 5.455 0 000 10.91zM12 0v2.182m0 19.636V24M3.513 3.513l1.549 1.549m13.876 13.876l1.55 1.55M0 12h2.182m19.636 0H24M3.513 20.487l1.549-1.549M18.938 5.062l1.55-1.55" />
            </g>
          </g>
        </g>
      </svg>
    )
  }
  if (variant === 'dark') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25">
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g fill="currentColor" fillRule="nonzero" transform="translate(-994 -56)">
            <g transform="translate(994.898 56.898)">
              <path d="M10.555.005A11.624 11.624 0 1023.199 12.65c.088-.948-.986-1.554-1.752-.988a7.082 7.082 0 01-9.905-9.904c.566-.766-.04-1.84-.987-1.753z" />
            </g>
          </g>
        </g>
      </svg>
    )
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fill="currentColor" fillRule="nonzero" transform="translate(-1108 -57)">
          <g transform="translate(972.38 43)">
            <path d="M146.62 14c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm0 3.143v15.714a7.857 7.857 0 000-15.714z" />
          </g>
        </g>
      </g>
    </svg>
  )
}

const ThemeChanger = (): JSX.Element => {
  const [mounted, setMounted] = useState(false)
  const [active, setActive] = useState(false)
  const [hovered, setHovered] = useState('')
  const { setTheme, theme } = useTheme()

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), [])

  if (!mounted) return <div className={styles.wrapper} /> // skeleton on server

  return (
    <AnimateSharedLayout>
      <div className={styles.wrapper}>
        <motion.div layout className={styles.menu}>
          <AnimatePresence initial={false}>
            {active && (
              <motion.div
                layout
                initial={{ borderRadius: 26, opacity: 0, scale: 0.9 }}
                exit={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className={styles.bg}
              />
            )}
            {variants.map(variant => {
              const selected = theme === variant
              const isHovered = hovered === variant
              return (
                <Fragment key={variant}>
                  {(selected || active) && (
                    <motion.button
                      onHoverStart={() => setHovered(variant)}
                      layout
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.85 }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      type="button"
                      title={variant}
                      key={variant}
                      className={styles.button}
                      onClick={() => {
                        if (!active) {
                          return setActive(true)
                        }
                        setActive(false)
                        return setTheme(variant)
                      }}
                    >
                      {((!active && selected) || isHovered) && (
                        <motion.span layoutId="buttonBackground" className={styles.buttonBackground} />
                      )}
                      <span className={styles.buttonLabel}>{getIcon(variant)}</span>
                    </motion.button>
                  )}
                </Fragment>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimateSharedLayout>
  )
}

export default ThemeChanger
