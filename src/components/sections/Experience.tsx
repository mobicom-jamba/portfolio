"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";

const experiences = [
  {
    role: "Senior Software Engineer",
    company: "Mobicom Corporation",
    // location: "Ulaanbaatar, Mongolia",
    period: "2022 - 2025",
    type: "Full-time",
    description:
      "Driving large-scale digital transformation projects in telecom and fintech. Leading backend and AI-powered system development across multiple platforms.",
    achievements: [
      "Architected and delivered MonPay Scoring AI, improving loan approval accuracy by 38% and reducing vendor costs by $83,400 annually",
      "Built Moogle knowledge management system for 1,700+ employees, reducing search time by 73% and increasing productivity by 41%",
      "Developed Smartdash sentiment analysis system, automating insights from Facebook data while ensuring compliance with Meta’s policies",
      "Led AuPay development (Japan) with 4 engineers, serving 44.5M+ users at enterprise scale",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "Java",
      "AWS",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Flutter",
      "GraphQL",
      "React Native",
      "Kubernetes",
      "Firebase",
      "Quarkus",
      "Redis",
      "PostgreSQL",
    ],
    color: "from-cyan-400 to-blue-500",
  },
  {
    role: "Full Stack Developer (Freelance & Outsourcing)",
    company: "Global Clients (Japan, US, EU)",
    location: "Remote",
    period: "2019 - 2025",
    type: "Remote / Contract",
    description:
      "Delivered high-quality full-stack solutions for international clients, focusing on performance, scalability, and clean architecture.",
    achievements: [
      "Completed 40+ outsourcing and freelance projects including AI-powered SaaS platforms, e-commerce systems, and internal tools",
      "Optimized performance of web apps with React/Next.js, reducing load times by up to 43% and increasing conversion rates by 28%",
      "Collaborated directly with Japanese product teams, ensuring pixel-perfect implementation and robust backend APIs",
      "Provided mentorship and code reviews for junior developers across remote teams",
    ],
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Python",
      "GraphQL",
      "Docker",
      "Kubernetes",
    ],
    color: "from-purple-400 to-pink-500",
  },
  {
    role: "Frontend Developer",
    company: "Startup & Early-stage Projects",
    // location: "Ulaanbaatar, Mongolia",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Joined early-stage startups to build MVPs from scratch, collaborating directly with founders to translate business requirements into scalable digital products.",
    achievements: [
      "Launched MVPs that attracted thousands of users within months",
      "Implemented reusable component libraries that standardized UI across multiple projects",
      "Set up CI/CD pipelines that reduced deployment time by 84% and increased code quality metrics by 62%",
    ],
    technologies: ["Vue.js", "JavaScript", "Sass", "Firebase", "Jest"],
    color: "from-green-400 to-teal-500",
  },
];

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-32 bg-gradient-to-b from-black via-gray-950 to-black relative overflow-hidden"
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
            Experience
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Professional Journey
            </span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, x: -60 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative flex gap-8 group"
              >
                {/* Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  className={`relative z-10 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-4 border-black group-hover:scale-125 transition-transform duration-300`}
                >
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${exp.color} rounded-full blur-md opacity-50`}
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                {/* Content card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="flex-1 bg-gray-900/40 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-gray-700/50 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                    <div>
                      <motion.h3
                        className="text-2xl font-bold text-white mb-2"
                        whileHover={{ color: "#00ffff" }}
                      >
                        {exp.role}
                      </motion.h3>

                      <div className="flex items-center gap-4 text-gray-400 mb-4">
                        <motion.div
                          className="flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          <Award
                            size={16}
                            className={`text-transparent bg-gradient-to-r ${exp.color} bg-clip-text`}
                          />
                          <span className="font-semibold text-cyan-400">
                            {exp.company}
                          </span>
                        </motion.div>

                        <div className="flex items-center gap-2">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col lg:items-end gap-2">
                      <div className="flex items-center gap-2 text-gray-400">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                      <span
                        className={`px-3 py-1 bg-gradient-to-r ${exp.color} text-black text-sm font-medium rounded-full`}
                      >
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: 20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.5,
                            delay: index * 0.2 + i * 0.1 + 0.5,
                          }}
                          className="flex items-start gap-3 text-gray-300"
                        >
                          <motion.div
                            className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`}
                            whileHover={{ scale: 1.5 }}
                          />
                          <span>{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{
                            duration: 0.3,
                            delay: index * 0.2 + i * 0.05 + 0.7,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-3 py-1 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/50 hover:border-cyan-400/50 transition-colors cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
