import { EXPERIENCES } from "../constants/works.jsx"

const experience = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          
        ))}
      </div>
    </div>
  )
}

export default experience