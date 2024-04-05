'use client'

import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 1,
      staggerChildren: 0.1,
    },
  },
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
}

export const AnimatedText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className="w-full mx-auto py-2 flex items-center justify-center text-left overflow-hidden sm:py-0">
      <motion.h1
        className={cn(
          'inline-block w-full text-primary font-bold  text-6xl',
          className
        )}
        variants={quote}
        initial="initial"
        animate="animate"
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            key={word + '-' + index}
            className="inline-block"
            variants={singleWord}
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}
