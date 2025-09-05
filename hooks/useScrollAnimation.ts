"use client"

import { useEffect, useRef } from "react"
import { useInView, useAnimation } from "framer-motion"

export const useScrollAnimation = (threshold = 0.1) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: threshold })
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [isInView, controls])

  return { ref, controls }
}

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const fadeInLeft = {
  hidden: {
    opacity: 0,
    x: -60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const fadeInRight = {
  hidden: {
    opacity: 0,
    x: 60,
    transition: { duration: 0.6, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}
