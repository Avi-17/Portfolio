import React from 'react'
import {RiReactjsLine, RiNodejsLine, RiFirebaseLine} from "react-icons/ri";
import {SiMysql, SiExpress, SiPrisma, SiApachehadoop} from "react-icons/si";
import { animate, motion, transform } from 'framer-motion';

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
const Tech = () => {

    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1
            whileInView={{opacity: 1 , y : 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className='my-20 text-center text-4xl'>
                Tech Stack
            </motion.h1>

            <motion.div
            whileInView={{opacity:1, x:0}}
            initial={{opacity : 0, x: -100}}
            transition={{duration : 1.5}}
            className='flex flex-wrap items-center justify-center gap-4'>

                <motion.div
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                transition={{duration: 0.3, ease: "easeInOut"}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiReactjsLine className='text-7xl text-cyan-400'/>
                    
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >ReactJS</motion.span>
                </motion.div>

                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiNodejsLine className='text-7xl text-green-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >Node.js</motion.span>
                </motion.div>

                <motion.div
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiMysql className='text-7xl text-blue-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >MySQL</motion.span>
                </motion.div>

                <motion.div
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiExpress className='text-7xl text-cyan-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >Express</motion.span>
                </motion.div>

                <motion.div
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiPrisma className='text-7xl text-white-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >Prisma ORM</motion.span>
                </motion.div>

                <motion.div
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <SiApachehadoop className='text-7xl text-yellow-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >Hadoop</motion.span>
                </motion.div>

                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                whileHover={{zIndex: 2, scale: 1.1}}
                className='rounded-2xl border-4 border-neutral-800 p-4'>
                    <RiFirebaseLine className='text-7xl text-orange-400'/>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className='absolute top-full mt-2 text-center text-sm text-purple-300'
                    >Firebase</motion.span>
                </motion.div>
                
            </motion.div>
        </div>
  )
}

export default Tech