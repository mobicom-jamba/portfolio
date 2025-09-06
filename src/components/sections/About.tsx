// components/sections/SimpleFlyingTech.tsx
"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Brain, Heart, Zap } from "lucide-react";

// All technologies in one array
const allTechs = [
  // Frontend
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Next.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#000000",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "JavaScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  {
    name: "Vue.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    color: "#4FC08D",
  },
  {
    name: "HTML5",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  {
    name: "CSS3",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  {
    name: "Tailwind CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  // Backend
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    color: "#68A063",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    color: "#3776AB",
  },
  {
    name: "Express",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    color: "#000000",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
    color: "#E10098",
  },
  // Database
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    color: "#336791",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    color: "#47A248",
  },
  {
    name: "Redis",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    color: "#DC382D",
  },
  {
    name: "MySQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  // Cloud & DevOps
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg",
    color: "#FF9900",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    color: "#326CE5",
  },
  {
    name: "Git",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "GitHub",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "",
  },
  // Tools
  {
    name: "VS Code",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    color: "#007ACC",
  },
  {
    name: "Figma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    color: "#F24E1E",
  },
  {
    name: "Firebase",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    color: "#FFCA28",
  },
  {
    name: "React Native",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "Swift",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
    color: "#FA7343",
  },
  {
    name: "Java",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    color: "#007396",
  },
  {
    name: "Spring Boot",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
    color: "#6DB33F",
  },
  {
    name: "Quarkus",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/quarkus/quarkus-original.svg",
    color: "#4695EB",
  },
  {
    name: "C++",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
    color: "#00599C",
  },
  {
    name: "Go",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
    color: "#00ADD8",
  },
  {
    name: "Prisma",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
    color: "#2D3748",
  },
  {
    name: "Jest",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    color: "#C21325",
  },
  {
    name: "Jenkins",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    color: "#D24939",
  },
  {
    name: "Linux",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624",
  },
];

const highlights = [
  {
    icon: Brain,
    title: "Problem Solver",
    description:
      "I love tackling complex challenges and finding elegant solutions that scale.",
  },
  {
    icon: Heart,
    title: "User-Focused",
    description:
      "Every line of code I write is with the end user experience in mind.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description:
      "Optimizing for speed, efficiency, and scalability in every project.",
  },
];

interface FlyingTech {
  id: number;
  tech: (typeof allTechs)[0];
  x: number;
  y: number;
  vx: number;
  vy: number;
  rotation: number;
  rotationSpeed: number;
  scale: number;
}

export default function SimpleFlyingTech() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [flyingTechs, setFlyingTechs] = useState<FlyingTech[]>([]);

  // Initialize flying tech objects
  // Initialize flying tech objects
  useEffect(() => {
    if (!containerRef.current) return;

    const { clientWidth, clientHeight } = containerRef.current;

    const techs: FlyingTech[] = allTechs.map((tech, index) => ({
      id: index,
      tech,
      x: Math.random() * clientWidth, // use full container width
      y: Math.random() * 600,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 2,
      scale: 0.8 + Math.random() * 0.4,
    }));
    setFlyingTechs(techs);
  }, []);

  // Animation loop for active flying
  useEffect(() => {
    if (!isInView || flyingTechs.length === 0) return;

    const animationInterval = setInterval(() => {
      setFlyingTechs((prevTechs) =>
        prevTechs.map((tech) => {
          const containerWidth = containerRef.current?.clientWidth ?? 800;
          const containerHeight = 600;

          let newX = tech.x + tech.vx;
          let newY = tech.y + tech.vy;
          let newVx = tech.vx;
          let newVy = tech.vy;

          // Bounce off edges
          if (newX <= 0 || newX >= containerWidth) {
            newVx = -tech.vx;
            newX = Math.max(0, Math.min(containerWidth, newX));
          }
          if (newY <= 0 || newY >= containerHeight) {
            newVy = -tech.vy;
            newY = Math.max(0, Math.min(containerHeight, newY));
          }

          return {
            ...tech,
            x: newX,
            y: newY,
            vx: newVx,
            vy: newVy,
            rotation: tech.rotation + tech.rotationSpeed,
          };
        })
      );
    }, 50); // 20fps for smooth movement

    return () => clearInterval(animationInterval);
  }, [isInView, flyingTechs.length]);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-32 bg-black relative overflow-hidden min-h-screen"
    >
      {/* Simple space background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-black to-gray-950" />

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
            Tech Universe
          </motion.div>

          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent">
              Technologies Flying Through Space
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Watch my tech stack actively fly through space. Each technology
            moves independently, creating a dynamic showcase of my development
            expertise.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative h-[600px] mb-20 bg-gray-900/20 rounded-3xl border border-gray-800/50 overflow-hidden"
        >
          {flyingTechs.map((flyingTech, index) => (
            <motion.div
              key={flyingTech.id}
              className="absolute cursor-pointer"
              initial={{ opacity: 0, scale: 0 }}
              animate={
                isInView
                  ? {
                      opacity: 1,
                      scale: flyingTech.scale,
                      x: flyingTech.x,
                      y: flyingTech.y,
                      rotate: flyingTech.rotation,
                    }
                  : {}
              }
              transition={{
                duration: 0.8,
                delay: 0.7 + index * 0.05,
                x: { duration: 0 },
                y: { duration: 0 },
                rotate: { duration: 0 },
              }}
              whileHover={{
                scale: flyingTech.scale * 1.3,
                zIndex: 50,
                transition: { duration: 0.2 },
              }}
            >
              <motion.div
                className="relative group"
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.3 }}
              >
                {/* Tech logo */}
                <div
                  className="w-16 h-16 flex items-center justify-center bg-gray-900/80 backdrop-blur-sm border-2 border-gray-700/50 rounded-2xl group-hover:border-cyan-400/50 transition-all duration-300"
                  style={{
                    boxShadow: `0 0 20px ${flyingTech.tech.color}40`,
                  }}
                >
                  <img
                    src={flyingTech.tech.logo}
                    alt={flyingTech.tech.name}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Tech name tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-50">
                  <div
                    className="bg-black/90 backdrop-blur-sm text-white text-sm px-3 py-2 rounded-lg border whitespace-nowrap font-medium"
                    style={{ borderColor: flyingTech.tech.color + "40" }}
                  >
                    {flyingTech.tech.name}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Story content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <p className="text-lg text-gray-300 leading-relaxed mb-8">
            My journey in software development began with a simple curiosity
            about how things work. That curiosity evolved into a passion for
            creating digital solutions that make a real difference in people's
            lives.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            I thrive in collaborative environments where innovation meets
            execution, constantly learning and adapting to new technologies and
            methodologies.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-gray-900/30 border border-gray-800/50 hover:border-cyan-400/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div
                className="w-16 h-16 bg-gradient-to-r from-cyan-400/20 to-purple-600/20 rounded-2xl flex items-center justify-center text-cyan-400 mx-auto mb-4 group-hover:text-white transition-colors duration-300"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <highlight.icon size={32} />
              </motion.div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {highlight.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Interaction hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 2 }}
          className="text-center mt-16"
        >
          <p className="text-sm text-gray-500">
            Hover over the flying technologies to see their names
          </p>
        </motion.div>
      </div>
    </section>
  );
}
