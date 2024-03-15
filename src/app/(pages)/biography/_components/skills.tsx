'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Skill } from './skill'

type Props = {}

export const Skills = (props: Props) => {
  return (
    <>
      <h2 className="font-bold text-6xl mt-32 md:text-8xl md:mt-64 w-full text-center">
        Skills
      </h2>
      <div className="w-full h-[50vh] sm:[60vh] lg:h-screen relative flex items-center justify-center rounded-full lg:bg-circularLight lg:dark:bg-cirularDark  bg-circularLightSm dark:bg-circularDarkSm  md:bg-circularLightMd md:dark:bg-circularLightMd ">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-primary text-light md:p-8 shadow-dark cursor-pointer text-sm p-2"
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
