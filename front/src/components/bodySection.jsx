import React from 'react'
import ProfilePic from '../assets/profilegray.jpg'

const bodySection = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className="w-full lg:w-1/2">
          <div className='flex justify-center items-center h-full'>
            <img
              src={ProfilePic}
              alt="Rouen Padilla"
              className='p-4 sm:p-8 md:p-10 lg:p-12 mx-auto md:mt-16 lg:mt-12'
            />
          </div>
        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start mt-10'>
            <h2 className='pb-2 text-3xl tracking-tighter lg:text-7xl'>Rouen Padilla</h2>
            <span className='bg-gradient-to-r font-semibold from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent'>Front-end Developer</span>
            <p className='my-2 max-w-lgh py-4 text-2xl font-light leading-relaxed tracking-tighter text-start'>
              I am a graduate of Computer Science with a strong passion for programming and a solid foundation in front-end development, including ReactJs, JavaScript, and Tailwind CSS. My academic journey has equipped me to effectively manipulate websites and integrate APIs, while my backend skills extend to working with MySQL, Node, and Java. I take pride in my leadership and problem-solving abilities, especially in collaborative environments where I bring logic and structure to complex challenges. I am committed to continuous learning and expanding my experience in the tech industry.
            </p>
            <a href="https://www.canva.com/design/DAGY42H07Tg/hgU1RlZ5WS0EBSiF3gBhkA/view?utm_content=DAGY42H07Tg&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=heaab2b2388"
              target='_blank'
              rel='noopener noreferrer'
              download
              className='bg-white rounded-full p-4 text-md text-stone-800 mb-5 items-center justify-center'>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default bodySection