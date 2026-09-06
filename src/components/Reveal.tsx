import type { ElementType, ReactNode } from 'react'
import { useReveal } from '../lib/useReveal'

type RevealProps = {
  children: ReactNode
  as?: ElementType
  className?: string
  /** Stagger delay in ms, applied as an inline transition-delay. */
  delay?: number
  id?: string
}

/** Wraps content in a scroll-triggered fade-up (no-op under reduced motion). */
export function Reveal({ children, as, className = '', delay = 0, id }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useReveal<HTMLElement>()

  return (
    <Tag
      ref={ref}
      id={id}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
