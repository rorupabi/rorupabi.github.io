import { PROJECTS } from "../constants/works.jsx"

const Projects = () => {
  const handleProjectClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 p-8" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl text-stone-300">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className={`bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] ${
                project.url ? 'cursor-pointer duration-200' : ''
              }`}
              onClick={() => handleProjectClick(project.url)}
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-stone-400 mb-6 text-start line-clamp-3 hover:line-clamp-none transition-all duration-300">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="rounded-full px-3 py-1 text-sm bg-slate-700 text-stone-300 inline-flex items-center"
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
  )
}

export default Projects