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
      className="flex items-center justify-center rounded-full font-semibold bg-primary text-light p-8 shadow-dark cursor-pointer absolute"
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
      viewport={{ once: true }}
    >
      {name}
    </motion.div>
  )
}
