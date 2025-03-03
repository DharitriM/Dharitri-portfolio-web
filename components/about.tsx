"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { FileText, Linkedin, Github } from "lucide-react"

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative rounded-xl overflow-hidden border-4 border-gray-800 shadow-xl max-w-md mx-auto">
              <Image
                src="/images/placeholder.png"
                alt="Dharitri Maharana"
                width={400}
                height={400}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">React.js and Next.js Developer</h3>
            <p className="text-gray-300 leading-relaxed">
              I&apos;m a Software Engineer with 2 years of experience specializing in creating user-facing Frontend UI.
              Proficient in modern JavaScript libraries, Backend development with Node.js and skilled in HTML, CSS,
              JavaScript and TypeScript.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Experienced in implementing advanced optimization techniques, design patterns, and software architecture
              for seamless application performance. Currently working at BrainerHub Solutions in Ahmedabad, where I&apos;ve
              successfully delivered over five complex projects.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-gray-400">Name:</p>
                <p className="font-medium">Dharitri Maharana</p>
              </div>
              <div>
                <p className="text-gray-400">Date of Birth:</p>
                <p className="font-medium">February 25, 2001</p>
              </div>
              <div>
                <p className="text-gray-400">Location:</p>
                <p className="font-medium">Sunabeda, Odisha, India</p>
              </div>
              <div>
                <p className="text-gray-400">Email:</p>
                <p className="font-medium">dharitri.m.2001@gmail.com</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
              <a
                href="https://linkedin.com/in/Dharitri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
              >
                <Linkedin size={18} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/Dharitri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded-lg transition-colors"
              >
                <Github size={18} />
                <span>GitHub</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

