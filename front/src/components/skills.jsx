import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";

const skills = () => {
  return (
    <div className="pb-24">
      <h2 className="my-10 text-center text-4xl">Languages & Skills</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>

        <div className="p-4">
          <DiHtml5 className="text-7xl text-orange-500" />
        </div>

        <div className="p-0">
          <RiCss3Fill className="text-7xl text-blue-500" />
        </div>

        <div className="p-3">
          <RiJavascriptFill className="text-7xl text-yellow-400" />
        </div>
      </div>
    </div>
  )
}

export default skills