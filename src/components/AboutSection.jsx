import React from 'react';
import home1 from '../img/home1.png';
import { styled } from 'styled-components';
// Framer Motion
import { motion } from 'framer-motion';
import { titleAnimate, fade, photoAnimate } from '../animation';
import Wave from './Wave';
// Style
import {About, Description, Image, Hide} from '../styles'

const AboutSection = () => {

   return (
      <About>
         <Description>
            <motion.div className="title">
               <Hide>
                  <motion.h2 variants={titleAnimate}>We work to make</motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnimate}>your <span>dreams</span> come</motion.h2>
               </Hide>
               <Hide>
                  <motion.h2 variants={titleAnimate}>true.</motion.h2>
               </Hide>
            </motion.div>
            <motion.p variants={fade}>
               Contact us for any photography or videography ideas that you have. We have professionals with amazing skills.
            </motion.p>
            <motion.button variants={fade}>Contact us</motion.button>
         </Description>
         <Image>
            <motion.img variants={photoAnimate} src={home1} alt="guy with a cam" />
         </Image>
         <Wave />
      </About>
   )
}


export default AboutSection;