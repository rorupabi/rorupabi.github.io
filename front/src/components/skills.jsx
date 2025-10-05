import { motion } from 'framer-motion';
import { RiReactjsLine, RiCss3Fill, RiJavascriptFill, RiTailwindCssFill, RiNextjsFill } from "react-icons/ri";
import { DiHtml5 } from "react-icons/di";
import { SiMysql, SiMongodb, SiVercel, SiLaravel } from "react-icons/si";
import { FaNode, FaJava, FaVuejs, FaFigma } from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import Daisyui from "../assets/daisyui-removebg-preview.png";

const Skills = () => {
  const skills = [
    { Icon: RiReactjsLine, color: "text-cyan-400", name: "React" },
    { Icon: DiHtml5, color: "text-orange-500", name: "HTML5" },
    { Icon: RiCss3Fill, color: "text-blue-500", name: "CSS3" },
    { Icon: RiJavascriptFill, color: "text-yellow-400", name: "JavaScript" },
    { Icon: FaVuejs, color: "text-green-400", name: "Vue.js" },
    { Icon: FaJava, color: "text-blue-400", name: "Java" },
    { Icon: FaFigma, color: "text-pink-400", name: "Figma" },
    { Icon: RiNextjsFill, color: "text-white", name: "Next.js" },
    { Icon: RiTailwindCssFill, color: "text-cyan-300", name: "Tailwind CSS" },
    { Icon: TbBrandFramerMotion, color: "text-purple-500", name: "Framer Motion" },
    { Icon: SiLaravel, color: "text-red-500", name: "Laravel" },
    { Icon: SiMysql, color: "text-sky-700", name: "MySQL" },
    { Icon: SiMongodb, color: "text-green-600", name: "MongoDB" },
    { Icon: FaNode, color: "text-green-500", name: "Node.js" },
    { Icon: SiVercel, color: "text-white", name: "Vercel" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="min-h-screen py-20 scroll-mt-20 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-16 text-center text-4xl md:text-5xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent">
              Tools & Technologies
            </span>
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.15,
                rotate: [0, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative"
            >
              <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
                <skill.Icon className={`text-6xl ${skill.color}`} />
              </div>
              
              {/* Tooltip */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              >
                {skill.name}
              </motion.div>
            </motion.div>
          ))}

          {/* DaisyUI - Special case with image */}
          <motion.div
            variants={itemVariants}
            whileHover={{ 
              scale: 1.15,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative"
          >
            <div className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300">
              <img 
                src={Daisyui} 
                alt="DaisyUI" 
                className="w-14 h-14"
              />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileHover={{ opacity: 1, y: 0 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-3 py-1 bg-black/90 text-white text-xs rounded-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            >
              DaisyUI
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;