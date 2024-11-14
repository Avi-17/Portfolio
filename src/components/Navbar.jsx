import React from 'react';
import logo from "../assets/theLogo.png";
import {FaLinkedin, FaGithub, FaInstagram} from "react-icons/fa"
import {FaSquareXTwitter} from "react-icons/fa6"
import {IoIosDocument} from "react-icons/io"
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-6'>
        <div className="flex flex-shrink-0 items-center">
            <img className='mx-2 w-10' src={logo} alt='logo' style={{height:'40px', width:'50px'}}/>
        </div>
        <motion.div
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x : 100}}
        transition={{duration:0.9}}
        className='m-8 flex items-center justify-center gap-4 text-2xl'>
          <a href='../public/Resume.pdf' download="Resume.pdf" target='_blank' rel="noopener noreferrer"><IoIosDocument/></a>
          <a href='https://github.com/Avi-17' target='_blank' rel="noopener noreferrer"><FaGithub/></a>
          <a href='https://www.linkedin.com/in/aviral-singh-a01070287/' target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
          <a href='https://x.com/Aviral3108?t=IcBF2PPeJ95uY8ZQlsVY1w&s=09' target='_blank' rel="noopener noreferrer"><FaSquareXTwitter/></a>
          <a href='https://www.instagram.com/omfg.itsavi/' target='_blank' rel="noopener noreferrer"><FaInstagram/></a>       
        </motion.div>
    </nav>
  )
}

export default Navbar

