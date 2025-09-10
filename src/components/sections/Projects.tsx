"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  Award,
  Users,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description:
      "A modern e-commerce solution built with Next.js and Stripe integration. Features include real-time inventory management, advanced search, and personalized recommendations.",
    longDescription:
      "Built a comprehensive e-commerce platform serving over 100,000 active users. Implemented complex features like dynamic pricing, inventory tracking, multi-vendor support, and AI-powered product recommendations.",
    image: "🛒",
    status: "Live",
    year: "2023",
    team: "5 developers",
    technologies: [
      "Next.js",
      "TypeScript",
      "Stripe",
      "PostgreSQL",
      "Redis",
      "AWS",
    ],
    features: [
      "Real-time inventory management",
      "AI-powered recommendations",
      "Multi-vendor marketplace",
      "Advanced analytics dashboard",
    ],
    metrics: {
      users: "100K+",
      performance: "98%",
      uptime: "99.9%",
    },
    links: {
      live: "https://webio.site/",
      // github: "https://github.com",
      // demo: "https://demo.example.com",
    },
    color: "from-cyan-400 to-blue-500",
  },
  {
    id: 2,
    title: "AI Analytics Dashboard",
    category: "Data Visualization",
    description:
      "Real-time analytics platform with machine learning insights. Processes millions of data points to provide actionable business intelligence.",
    longDescription:
      "Developed an enterprise-grade analytics platform that processes real-time data streams and provides ML-powered insights. Features custom visualizations, predictive analytics, and automated reporting.",
    image: "📊",
    status: "In Development",
    year: "2024",
    team: "8 developers",
    technologies: [
      "React",
      "D3.js",
      "Python",
      "TensorFlow",
      "Apache Kafka",
      "ClickHouse",
    ],
    features: [
      "Real-time data processing",
      "Custom visualization engine",
      "Predictive analytics",
      "Automated report generation",
    ],
    metrics: {
      dataPoints: "10M+",
      latency: "<100ms",
      accuracy: "94%",
    },
    links: {
      live: "https://analytics.example.com",
      github: "https://github.com",
      demo: "https://demo-analytics.example.com",
    },
    color: "from-purple-400 to-pink-500",
  },
  {
    id: 3,
    title: "Collaborative Design Tool",
    category: "SaaS",
    description:
      "Browser-based design tool for teams with real-time collaboration. Think Figma meets Notion with advanced version control.",
    longDescription:
      "Created a collaborative design platform that enables teams to work together in real-time. Features include vector editing, component libraries, version control, and seamless design-to-code workflows.",
    image: "🎨",
    status: "Beta",
    year: "2023",
    team: "12 developers",
    technologies: [
      "Vue.js",
      "WebRTC",
      "Canvas API",
      "Node.js",
      "Socket.io",
      "MongoDB",
    ],
    features: [
      "Real-time collaboration",
      "Vector graphics editor",
      "Component system",
      "Design-to-code export",
    ],
    metrics: {
      users: "50K+",
      collaboration: "Real-time",
      export: "15 formats",
    },
    links: {
      live: "https://design.example.com",
      github: "https://github.com",
      demo: "https://beta.design.example.com",
    },
    color: "from-green-400 to-teal-500",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-gray-950 via-black to-gray-950 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-6"
          >
            Featured Work
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Selected Projects
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, featuring full-stack applications,
            data visualizations, and innovative solutions.
          </p>
        </motion.div>

        {/* Projects grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl overflow-hidden hover:border-gray-700/50 transition-all duration-500 cursor-pointer"
                onClick={() => setSelectedProject(project.id)}
                data-cursor-text="View Details"
              >
                {/* Project image/icon */}
                <div
                  className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center text-6xl relative overflow-hidden`}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"
                    whileHover={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.span
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.image}
                  </motion.span>

                  {/* Status badge */}
                  <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 text-xs font-medium rounded-full ${
                        project.status === "Live"
                          ? "bg-green-500/20 text-green-400 border border-green-500/30"
                          : project.status === "Beta"
                          ? "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          : "bg-blue-500/20 text-blue-400 border border-blue-500/30"
                      }`}
                    >
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-gray-500 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <span className="text-sm text-gray-500">
                      {project.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(project.metrics).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center py-2 bg-gray-800/30 rounded-lg"
                      >
                        <div className="text-sm font-bold text-cyan-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-800/50 text-gray-300 rounded text-xs border border-gray-700/50"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-500 text-xs">
                        +{project.technologies.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-2">
                    {project.links.live && (
                      <motion.a
                        href={project.links.live}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium hover:bg-cyan-500/30 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={14} />
                        Live
                      </motion.a>
                    )}

                    {project.links.github && (
                      <motion.a
                        href={project.links.github}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-1 px-3 py-2 bg-gray-700/30 text-gray-300 rounded-lg text-sm font-medium hover:bg-gray-700/50 transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={14} />
                        Code
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-gray-900/90 backdrop-blur-xl border border-gray-700/50 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject)!;
                return (
                  <div>
                    {/* Header */}
                    <div
                      className={`h-32 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}
                    >
                      <div className="text-6xl">{project.image}</div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 w-8 h-8 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/40 transition-colors"
                      >
                        ×
                      </button>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h2 className="text-3xl font-bold text-white mb-2">
                            {project.title}
                          </h2>
                          <div className="flex items-center gap-4 text-gray-400">
                            <span className="flex items-center gap-1">
                              <Calendar size={16} />
                              {project.year}
                            </span>
                            <span className="flex items-center gap-1">
                              <Users size={16} />
                              {project.team}
                            </span>
                            <span
                              className={`px-3 py-1 text-xs font-medium rounded-full ${
                                project.status === "Live"
                                  ? "bg-green-500/20 text-green-400"
                                  : project.status === "Beta"
                                  ? "bg-yellow-500/20 text-yellow-400"
                                  : "bg-blue-500/20 text-blue-400"
                              }`}
                            >
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed mb-8">
                        {project.longDescription}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Key Features
                        </h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-gray-300"
                            >
                              <div
                                className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full`}
                              />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-white mb-4">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-2 bg-gray-800/50 text-gray-300 rounded-lg border border-gray-700/50"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Links */}
                      <div className="flex gap-4">
                        {project.links.live && (
                          <a
                            href={project.links.live}
                            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg font-medium transition-colors"
                          >
                            <ExternalLink size={18} />
                            View Live
                          </a>
                        )}

                        {project.links.github && (
                          <a
                            href={project.links.github}
                            className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
                          >
                            <Github size={18} />
                            View Code
                          </a>
                        )}

                        {project.links.demo && (
                          <a
                            href={project.links.demo}
                            className="flex items-center gap-2 px-6 py-3 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-lg font-medium transition-colors"
                          >
                            <Play size={18} />
                            Demo
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
