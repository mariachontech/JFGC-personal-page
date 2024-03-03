import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  name: string
  x: string
  y: string
}

export const Skill = ({ name, x, y }: Props) => {
  return (
    <motion.div
      className="flex items-center justify-center rounded-full font-semibold md:bg-primary bg-transparent  text-light p-8 shadow-dark cursor-pointer absolute px-3 py-1.5 text-xs md:text-base  md:px-4 md:py-1  "
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
