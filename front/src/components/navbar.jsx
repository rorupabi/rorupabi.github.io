import LinkedIn from '../assets/linkedin.png'
import Github from '../assets/github.png'
import Indeed from '../assets/Indeed-Symbol.png'
import { RiLinkedinBoxFill } from "react-icons/ri"
import { RiGithubFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center justify-between py-6 sm:mb-[-3rem] lg:mb-4">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <p className="font-semibold text-xl mx-2">Rouen Padilla's Portfolio</p>
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-3 text-2xl">
          < RiLinkedinBoxFill className="text-4xl text-white" />

          <RiGithubFill className="text-4xl text-white" />

        </div>
      </nav>
    </>
  )
}

export default Navbar