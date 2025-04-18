import React from 'react'
import ProfilePic from '../assets/profilepic.JPG'

const bodySection = () => {
  return (
    <div className='pb-4 lg:mb-36 '>
      <div className='flex flex-wrap lg:flex-row-reverse'>
        <div className="w-full lg:w-1/2">
          <div className='flex justify-center lg:-8'>
            <img src={ProfilePic} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default bodySection