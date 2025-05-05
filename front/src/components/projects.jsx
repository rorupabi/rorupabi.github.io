import { PROJECTS } from "../constants/experiences.jsx"

const Projects = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Projects</h2>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
            <div className="w-full lg:w-1/4">
              <img 
                src={project.image} 
                alt={project.title} 
                width={250} 
                height={250} 
                className="mb-6 rounded"
              />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h3 className="mb-4 text-2xl font-semibold">{project.title}</h3>
              <p className="mb-4 text-stone-400 text-lg">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.technologies.map((tech, index) => (
                  <span 
                    key={index} 
                    className="rounded px-3 py-1 text-sm mr-2 bg-stone-800 p-2 font-medium text-stone-300 items-center"
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
  )
}

export default Projects