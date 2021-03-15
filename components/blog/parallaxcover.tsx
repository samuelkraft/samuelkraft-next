import Parallax from 'components/parallax'
import styles from './parallaxcover.module.scss'

const ParallaxCover = (): JSX.Element => (
  <div className={styles.wrapper}>
    <div className={styles.parallaxContainer}>
      <Parallax offset={100} clampInitial>
        <img src="/blog/spring-parallax-framer-motion-guide/bg.png" alt="Starry sky" />
      </Parallax>
    </div>
    <img src="/blog/spring-parallax-framer-motion-guide/logo.png" alt="Framer Motion stylized logo" className={styles.logo} />
  </div>
)

export default ParallaxCover
