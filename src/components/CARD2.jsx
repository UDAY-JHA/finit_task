import React from 'react';
import { easeIn, motion } from "motion/react";
import { easeInOut, easeOut } from 'motion';

const Card = () => {
  return (
    <motion.div className="bg-gradient-to-br from-purple-500 via-fuchsia-600 to-indigo-600 p-[2px] rounded-[2rem] shadow-2xl max-w-4xl mx-auto my-20"initial={{ x: 200, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    transition={{ duration: 1 }}
    viewport={{ once: true, amount: 0.3 }} >
      <div
  className="w-full rounded-[2rem] overflow-hidden bg-white/10 backdrop-blur-md border border-white/20 shadow-xl font-nunito p-6 sm:p-10 flex flex-col gap-6 sm:gap-10 transition-all"
  
>
        <p className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center text-white drop-shadow-md">
          OUR MISSION
        </p>

        <div className="text-base sm:text-lg lg:text-xl text-white leading-relaxed tracking-wide space-y-4">
          <p>
            Our mission is to empower students with practical financial knowledge and skills,
            enabling them to make informed decisions and achieve financial independence.
          </p>
          <p>
            We are committed to providing engaging educational opportunities that cover essential
            topics such as budgeting, saving, investing, and money management.
          </p>
          <p>
            By exploring diverse income avenues and fostering entrepreneurial innovation,
            we inspire students to pursue their financial goals with confidence.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
