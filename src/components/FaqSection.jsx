import React from 'react';
//Style
import { styled } from 'styled-components';
import { About } from '../styles';
//Reusable component
import Toggle from './Toggle';
//Animation
import { LayoutGroup } from 'framer-motion';
import { fade } from '../animation';

const FaqSection = () => {
   return (
      <Faq variants={fade}>
         <h2>Any Questions <span>FAQ</span></h2>
         <LayoutGroup>
         <Toggle title="How Do I Start?">
            <div className="question">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               </div>
            </div>
         </Toggle>
         <Toggle title="Daily Schedule">
            <div className="question">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               </div>
            </div>
         </Toggle>
         <Toggle title="Different Payment Methods">
            <div className="question">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               </div>
            </div>
         </Toggle>
         <Toggle title="What product do you offer?">
            <div className="question">
               <div className="answer">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
               </div>
            </div>
         </Toggle>
         </LayoutGroup>
      </Faq>
   )
};

const Faq = styled(About)`
   display: block;
   span {
      display: block;
   }
   h2 {
      padding-bottom: 2rem;
      font-weight: lighter;
   }
   .faq-line {
      background: #ccc;
      height: 0.2rem;
      margin: 2rem 0rem;
      width: 100%;
   }
   .question {
      padding: 3rem 0rem;
      cursor: pointer;
   }
   .answer {
      padding: 2rem 0rem;
      p {
         padding: 1rem 0rem;
      }
   }
`

export default FaqSection