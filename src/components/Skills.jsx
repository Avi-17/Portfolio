import React from 'react';
import { FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { BiLogoJavascript } from "react-icons/bi";
import { motion } from 'framer-motion';


const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
      y : [10, -10],
      transition: {
          duration: duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "reverse"
      }
  }
})

const Skills = () => {
  return (
    <div className='border-b border-neutral-800 pb-24'>
      <motion.h1
      whileInView={{opacity: 1 , y : 0}}
      initial={{opacity: 0, y: -100}}
      transition={{duration: 1.5}}
      className='my-20 text-center text-4xl'>
        Skills
      </motion.h1>

      <motion.div
      whileInView={{opacity:1, x:0}}
      initial={{opacity : 0, x: -100}}
      transition={{duration : 1.5}}
      className='flex flex-wrap items-center justify-center gap-4'>

        <motion.div
        variants={iconVariants(2)}
        initial="initial"
        animate="animate"
        whileHover={{zIndex: 2, scale: 1.1}}
        transition={{duration: 0.3, ease:"easeInOut"}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaPython className='text-7xl text-blue-400'/>
          <motion.span
          initial={{opacity: 0}}
          animate={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute top-full mt-2 text-center text-sm text-purple-300'>
            Python
          </motion.span>
        </motion.div>

        <motion.div
        variants={iconVariants(3)}
        initial="initial"
        animate="animate"
        whileHover={{zIndex: 2, scale: 1.1}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaJava className='text-7xl text-red-400'/>
          <motion.span
          initial={{opacity: 0}}
          animate={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute top-full mt-2 text-center text-sm text-purple-300'>
            Java
          </motion.span>
        </motion.div>

        <motion.div
        variants={iconVariants(5)}
        initial="initial"
        animate="animate"
        whileHover={{zIndex: 2, scale: 1.1}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <BiLogoJavascript className='text-7xl text-yellow-400'/>
          <motion.span
          initial={{opacity: 0}}
          animate={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute top-full mt-2 text-center text-sm text-purple-300'>
            JavaScript
          </motion.span>
        </motion.div>

        <motion.div
        variants={iconVariants(2.5)}
        initial="initial"
        animate="animate"
        whileHover={{zIndex: 2, scale: 1.1}}
        className='rounded-2xl border-4 border-neutral-800 p-4'>
          <FaDatabase className='text-7xl text-blue-400'/>
          <motion.span
          initial={{opacity: 0}}
          animate={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute top-full mt-2 text-center text-sm text-purple-300'>
            Database
          </motion.span>
        </motion.div>

        <motion.div
        variants={iconVariants(4)}
        initial="initial"
        animate="animate"
        whileHover={{zIndex: 2, scale: 1.1}}
        className='rounded-2xl border-4 border-neutral-800 p-4 flex items-center justify-center'>
          <span className='text-7xl text-blue-400 font-bold'>OOPs</span>
          <motion.span
          initial={{opacity: 0}}
          animate={{opacity: 0}}
          whileHover={{opacity: 1}}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className='absolute top-full mt-2 text-center text-sm text-purple-300'>
            OOPs
          </motion.span>
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Skills;
