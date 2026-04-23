import { Children, type ReactNode, useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'framer-motion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={prefersReducedMotion ? false : { opacity: 0, y }}
      animate={
        prefersReducedMotion || isInView ? { opacity: 1, y: 0 } : undefined
      }
      transition={{
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
        delay,
      }}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = {
  children: ReactNode
  className?: string
  stagger?: number
}

export function Stagger({ children, className, stagger = 0.06 }: StaggerProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = useReducedMotion()
  const isInView = useInView(ref, { once: true, margin: '-8% 0px' })

  return (
    <motion.div ref={ref} className={className}>
      {Children.map(children, (child, i) => (
        <motion.div
          key={i}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          animate={
            prefersReducedMotion || isInView ? { opacity: 1, y: 0 } : undefined
          }
          transition={{
            duration: 0.55,
            ease: [0.25, 0.1, 0.25, 1],
            delay: i * stagger,
          }}
        >
          {child}
        </motion.div>
      ))}
    </motion.div>
  )
}
