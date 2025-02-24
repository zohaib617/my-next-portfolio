"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function AnimatedLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, x: -400 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 400 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 10,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

