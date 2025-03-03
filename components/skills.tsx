"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code, Database, Braces, GitBranch, Layers, PenTool, Users, Lightbulb } from "lucide-react"

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const technicalSkills = [
    { name: "HTML, CSS", icon: <Code className="w-6 h-6" />, level: 90 },
    { name: "JavaScript", icon: <Braces className="w-6 h-6" />, level: 85 },
    { name: "TypeScript", icon: <Braces className="w-6 h-6" />, level: 75 },
    { name: "React", icon: <Braces className="w-6 h-6" />, level: 85 },
    { name: "Next.js", icon: <Layers className="w-6 h-6" />, level: 80 },
    { name: "Node.js", icon: <Layers className="w-6 h-6" />, level: 70 },
    { name: "Git, GitHub", icon: <GitBranch className="w-6 h-6" />, level: 80 },
    { name: "Python", icon: <Code className="w-6 h-6" />, level: 65 },
    { name: "PostgreSQL", icon: <Database className="w-6 h-6" />, level: 65 },
    { name: "MongoDB", icon: <Database className="w-6 h-6" />, level: 70 },
    { name: "MySQL", icon: <Database className="w-6 h-6" />, level: 65 },
  ]

  const softSkills = [
    { name: "Problem-Solving", icon: <Lightbulb className="w-6 h-6" /> },
    { name: "Collaboration", icon: <Users className="w-6 h-6" /> },
    { name: "Adaptability", icon: <Layers className="w-6 h-6" /> },
    { name: "Creativity", icon: <PenTool className="w-6 h-6" /> },
    { name: "Attention to Detail", icon: <Code className="w-6 h-6" /> },
    { name: "Empathy", icon: <Users className="w-6 h-6" /> },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My technical toolkit and professional competencies that enable me to deliver high-quality solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">Technical Skills</h3>
            <motion.div
              variants={container}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              className="space-y-6"
            >
              {technicalSkills.map((skill, index) => (
                <motion.div key={index} variants={item} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-sm text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-primary rounded-full h-2">
                    <div className="bg-gray-700 h-2 rounded-full" style={{ width: `${skill.level}%` }}></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-6 mt-8 lg:mt-0 text-center lg:text-left">Soft Skills</h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="bg-gray-800/50 rounded-lg p-4 flex flex-col items-center text-center hover:bg-gray-800 transition-colors"
                >
                  <div className="bg-primary/20 p-3 rounded-full mb-3">{skill.icon}</div>
                  <h4 className="font-medium">{skill.name}</h4>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 bg-gray-800/30 rounded-lg p-6"
            >
              <h3 className="text-xl font-bold mb-3">Education</h3>
              <div className="space-y-2">
                <p className="font-medium">B.Tech in Information Technology</p>
                <p className="text-gray-400">National Institute of Science and Technology</p>
                <p className="text-gray-400">2019-2023 | CGPA: 8.9</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

