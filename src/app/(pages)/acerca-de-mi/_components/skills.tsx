'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from './skill'

type Props = {}

export const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center">Skills</h2>
      <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-cirularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-primary text-light p-8 shadow-dark cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          Control
        </motion.div>
        <Skill name="Modelado" x="-5vw" y="-10vw" />
        <Skill name="Kalman Filter" x="20vw" y="6vw" />
        <Skill name="Navigation" x="0vw" y="12vw" />
        <Skill name="UAV" x="-20vw" y="-15vw" />
        <Skill name="CPS" x="15vw" y="-12vw" />
      </div>
    </>
  )
}
