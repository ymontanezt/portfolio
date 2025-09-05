"use client"

import { memo, type ReactNode } from "react"
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver"

interface PerformanceOptimizedSectionProps {
  children: ReactNode
  className?: string
  id?: string
  threshold?: number
  rootMargin?: string
}

const PerformanceOptimizedSection = memo<PerformanceOptimizedSectionProps>(
  ({ children, className = "", id, threshold = 0.1, rootMargin = "100px" }) => {
    const { ref, isIntersecting } = useIntersectionObserver({
      threshold,
      rootMargin,
      triggerOnce: true,
    })

    return (
      <section ref={ref} id={id} className={className}>
        {isIntersecting ? children : <div className="py-20" />}
      </section>
    )
  },
)

PerformanceOptimizedSection.displayName = "PerformanceOptimizedSection"

export default PerformanceOptimizedSection
