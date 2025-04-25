import { RiReactjsLine } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { RiCss3Fill } from "react-icons/ri";
import { RiJavascriptFill } from "react-icons/ri";
import Mongodb from "../assets/mongodb.svg";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="pb-24 pt-20 scroll-mt-24">
      <h2 className="my-10 text-center text-4xl">Tools & Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-6xl hover:scale-120 duration-300 text-cyan-400" />
        </div>

        <div className="p-4">
          <DiHtml5 className="text-6xl hover:scale-120 duration-300 text-orange-500" />
        </div>

        <div className="p-0">
          <RiCss3Fill className="text-6xl hover:scale-120 duration-300 text-blue-500" />
        </div>

        <div className="p-3">
          <RiJavascriptFill className="text-6xl hover:scale-120 duration-300 text-yellow-400" />
        </div>

        <div className="p-3">
          <RiTailwindCssFill className="text-6xl hover:scale-120 duration-300 text-cyan-300" />
        </div>

        <div className="p-3">
          <SiMysql className="text-6xl hover:scale-120 duration-300 text-sky-700" />
        </div>

        <div className="p-3">
          <SiMongodb className="text-6xl text-green-600" />
        </div>

        <div className="p-3">
          <FaNode className="text-6xl text-green-500" />
        </div>
      </div>
    </section>
  );
};

export default Skills