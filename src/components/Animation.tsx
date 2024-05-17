'use client'
import { motion } from "framer-motion";
import Image from "next/image";

const Animation = () => {
  return (
    <div className="flex">
      <motion.div
        animate={{
          scale: [1, 3],
          rotate: [0, 90],
          x: -1000,
          y: 100
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          times: [0, 1],
        }}
      >
        <Image
          src={'https://utfs.io/f/5a03036e-7705-4662-bef6-aa4cc5dfa6bd-lxghb4.png'}
          alt={''}
          width={320}
          height={320}
          className="w-72 h-72"
        />
      </motion.div>
      <motion.div
        animate={{
          scale: [1, 3],
          // rotate: [0, 90],
          x: 650,
          y: 200
        }}
        transition={{
          duration: 1,
          ease: 'easeInOut',
          times: [0, 1],
        }}
      >
        <Image
          src={'https://utfs.io/f/021f6c0d-38fd-4c1a-85cb-8d0db563d9d1-1sgsxu.png'}
          alt={''}
          width={1000}
          height={1000}
          className="w-72"
        />
      </motion.div>
    </div>
  )
}

export default Animation
