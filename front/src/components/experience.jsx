import React from 'react';
import { EXPERIENCES } from "../constants/works.jsx";

const Experience = () => {
  return (
    <section id='experience' className='duration-300'>
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-lg font-medium text-start text-stone-400">
                {experience.year}
              </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-2 font-semibold">
                {experience.role} -{" "}
                <span className="text-md text-stone-500">
                  {experience.company || ""}
                </span>
              </h3>
              <p className="mb-4 text-stone-400 text-start">
                {experience.description}
              </p>
              <div className="flex flex-wrap">
                {experience.technologies && experience.technologies.map((tech, index) => (
                  <span 
                    className="mr-2 mb-2 rounded bg-slate-800 px-2 py-1 text-sm font-medium text-stone-300" 
                    key={index}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Experience;