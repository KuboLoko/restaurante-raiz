import { useEffect, useRef, useState } from 'react'

/**
 * Adds an `is-visible` state the first time the element scrolls into view.
 * Pair with the `.reveal` utility class for a subtle fade-up.
 *
 * Uses an IntersectionObserver for the nice case and a throttled scroll/resize
 * check as a guaranteed fallback, so a section can never stay stuck invisible
 * (fast programmatic scrolls, restored scroll positions, flaky IO, etc.).
 * Honours `prefers-reduced-motion` — the CSS falls back to fully visible.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    let done = false
    let ticking = false

    const inView = () => {
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      return rect.top < vh * 0.9 && rect.bottom > 0
    }

    const reveal = () => {
      if (done) return
      done = true
      setVisible(true)
      cleanup()
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        ticking = false
        if (inView()) reveal()
      })
    }

    let observer: IntersectionObserver | undefined
    if (typeof IntersectionObserver !== 'undefined') {
      observer = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) reveal()
        },
        { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
      )
      observer.observe(node)
    }

    function cleanup() {
      observer?.disconnect()
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // Initial check (element may already be in view at mount).
    if (inView()) reveal()

    return cleanup
  }, [])

  return { ref, visible }
}
