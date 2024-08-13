// SkillsSection.js
import React from 'react';
import figma from '../assets/icons/figma.png'; 
import photoshop from "../assets/icons/photoshop.png";
import sketch from '../assets/icons/sketch.png';
import xd from '../assets/icons/xd.png';

const skills = [
  { icon: figma, name: 'Figma', percentage: '92%' },
  { icon: sketch, name: 'Sketch', percentage: '80%' },
  { icon: xd, name: 'XD', percentage: '85%' },
  { icon: photoshop, name: 'Photoshop', percentage: '99%' },
];

const SkillsSection = () => {
  return (
    <div id='skills' className="bg-background text-accent py-14 lg:py-20 ">
      <div className="container mx-auto text-center">
      <h1 className="mb-3 text-3xl font-bold leading-[1.2] text-center dark:text-white capitalize sm:text-4xl ">My Skills</h1>
      <p className="mb-12 lg:mb-20">
          We put your ideas and thus your wishes in the form of a unique web project that inspires you and your customers.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[2rem] lg:mx-[6rem] gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-800 rounded-lg p-6 text-center outline-none transition-all duration-500 hover:outline-primary hover:scale-105 hover:shadow-lg"
            >
              <img src={skill.icon} className="h-28 mx-auto transition-transform duration-300 group-hover:scale-110 " />
              <p className="mt-4 text-xl">{skill.percentage}</p>
              <p className="text-primary mt-2 font-bold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
