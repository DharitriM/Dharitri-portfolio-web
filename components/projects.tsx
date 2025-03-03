"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: "Comverse",
      description:
        "A robust, feature-rich notes and project management system integrated with email notifications for seamless updates and communication.",
      image: "/images/placeholder.png",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Foodor",
      description:
        "Comprehensive admin panel for food delivery, featuring restaurant management, order tracking, and automated bill generation.",
      image: "/images/placeholder.png",
      tags: ["Next.js", "TypeScript", "Firebase", "Tailwind CSS"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "HomeVote",
      description:
        "Versatile voting management app tailored for property transactions, enabling users to cast votes and make informed decisions seamlessly.",
      image: "/images/placeholder.png",
      tags: ["React", "Redux", "Node.js", "PostgreSQL"],
      links: {
        demo: "#",
        github: "#",
      },
    },
    {
      title: "Hmiiza",
      description:
        "Feature-rich eCommerce app enabling efficient buying and selling, integrated with seller-buyer chat for price negotiation, supported by admin panel.",
      image: "/images/placeholder.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      links: {
        demo: "#",
        github: "#",
      },
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            A showcase of my recent work and projects I&apos;ve contributed to.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={item}
              className="bg-gray-800/50 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  // src={project.image || "/placeholder.svg"}
                  src="/images/placeholder.png"
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-gray-700 text-xs px-3 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {/* <a
                    href={project.links.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a> */}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

