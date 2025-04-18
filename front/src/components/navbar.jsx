import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Indeed from '../assets/Indeed-Symbol.png'

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <p className="font-semibold text-xl mx-2">Rorupabi's Portfolio</p>
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-3 text-2xl">
          <a href="https://www.linkedin.com/in/rouen-padilla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn">
            <img src={LinkedIn} alt="LinkedIn" className="h-8 w-8" />
          </a>

          <a href="https://www.linkedin.com/in/rouen-padilla"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github">
            <img src={Github} alt="LinkedIn" className="h-7 w-7" />
          </a>

        </div>
      </nav>
    </>
  )
}

export default Navbar