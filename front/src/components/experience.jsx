import { EXPERIENCES } from "../constants/works.jsx"

const experience = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <p className="mb-2 text-md text-stone-400">
              {experience.year}
            </p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
            <h3 className="mb-2 font-semibold">
              {experience.role} -{" "}
              <span className="text-md text-stone-500">
                {experience.company}
              </span>
              </h3>
              <p className="mb-4 text-stone-400">
                description
                {experience.technologies.map((tech, index))}
              </p>
              </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default experience