import { useState, useRef, useLayoutEffect, ReactNode } from 'react'
import { motion, useViewportScroll, useTransform, useSpring, Spring } from 'framer-motion'

type ParallaxProps = {
  children: ReactNode
  spring?: Spring
  strength?: number
}

const Parallax = ({ children, spring = { stiffness: 400, damping: 90 }, strength = 1 }: ParallaxProps): JSX.Element => {
  const [elementTop, setElementTop] = useState(0)
  const [clientHeight, setClientHeight] = useState(0)
  const ref = useRef(null)

  const { scrollY } = useViewportScroll()

  const initial = elementTop - clientHeight
  const final = elementTop + clientHeight

  const yRange = useTransform(scrollY, [initial, final], [`${strength * 100}%`, `-${strength * 100}%`])
  const y = useSpring(yRange, spring)

  useLayoutEffect(() => {
    const element = ref.current
    const onResize = () => {
      setElementTop(element.offsetTop)
      setClientHeight(window.innerHeight)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [ref])

  return (
    <motion.div ref={ref} initial={{ y: 0 }} style={{ y }}>
      {children}
    </motion.div>
  )
}

export default Parallax
