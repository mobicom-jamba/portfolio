// components/sections/Hero.tsx
"use client";

import { useRef, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useInView,
} from "framer-motion";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import TypewriterText from "../TypewriterText";
import FloatingElements from "../FloatingElements";
import CodeWindow3D from "../CodeWindow3D";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const glowVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: {
      scale: [0.8, 1.2, 1],
      opacity: [0, 0.6, 0.3],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden"
    >
      {/* Animated background elements */}
      <FloatingElements />

      {/* Gradient orbs */}
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-3xl"
      />
      <motion.div
        variants={glowVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 1 }}
        className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-purple-600/20 to-transparent rounded-full blur-3xl"
      />

      <motion.div
        style={{ y, opacity }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
            >
              <Sparkles size={16} className="animate-pulse" />
              Available for new opportunities
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles size={16} />
              </motion.div>
            </motion.div>
            <motion.div variants={itemVariants} className="mb-8">
              <div className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.8 }}
                  className="overflow-hidden"
                >
                  <span className="inline-block mr-4">Hi, I'm </span>
                  <motion.span
                    initial={{ backgroundPosition: "0% 50%" }}
                    animate={{ backgroundPosition: "100% 50%" }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-cyan-400 bg-[length:300%_100%] bg-clip-text text-transparent"
                  >
                    {" "}
                    Jamba
                  </motion.span>
                </motion.div>
              </div>
            </motion.div>

            {/* Typewriter subtitle */}
            <motion.div variants={itemVariants} className="mb-8">
              <TypewriterText
                texts={[
                  "Senior Software Engineer",
                  "Full-Stack Developer",
                  "Cloud Architect",
                  "Tech Innovator",
                ]}
                className="text-2xl sm:text-3xl text-gray-400"
              />
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-12 max-w-2xl"
            >
              Passionate about building{" "}
              <motion.span
                whileHover={{ color: "#00ffff" }}
                className="text-cyan-400 cursor-pointer"
              >
                scalable applications
              </motion.span>{" "}
              that solve real-world problems. Specialized in modern web
              technologies with{" "}
              <motion.span
                whileHover={{ color: "#a855f7" }}
                className="text-purple-400 cursor-pointer"
              >
                6+ years of experience
              </motion.span>
              .
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 mb-12"
            >
              {[
                {
                  number: "6+",
                  label: "Years Experience",
                  color: "from-cyan-400 to-blue-500",
                },
                {
                  number: "40+",
                  label: "Projects Delivered",
                  color: "from-blue-500 to-purple-600",
                },
                {
                  number: "15+",
                  label: "Technologies",
                  color: "from-purple-600 to-pink-500",
                },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center group cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.2 }}
                >
                  <motion.div
                    className={`text-3xl sm:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12"
            >
              <Link href="#contact" passHref legacyBehavior>
                <a
                  data-cursor-text="Let's Talk"
                  className="group relative px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-400/25"
                >
                  <MagneticButton>
                    <span className="relative z-10 flex items-center gap-2">
                      Get In Touch
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    </span>
                  </MagneticButton>
                </a>
              </Link>

              <Link href="/resume.pdf" passHref legacyBehavior>
                <a
                  data-cursor-text="Download"
                  className="group px-8 py-4 border-2 border-gray-600 hover:border-cyan-400 text-white rounded-xl font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-cyan-400/10"
                >
                  <MagneticButton>
                    <span className="flex items-center gap-2">
                      <motion.div
                        animate={{ y: [0, -2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Download size={18} />
                      </motion.div>
                      Resume
                    </span>
                  </MagneticButton>
                </a>
              </Link>
            </motion.div>

            {/* Social Links */}
            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/jambacx/",
                  label: "GitHub",
                  color: "hover:text-gray-300",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/thejamba/",
                  label: "LinkedIn",
                  color: "hover:text-blue-400",
                },
                {
                  icon: Mail,
                  href: "mailto:jamba.div@gmail.com",
                  label: "Email",
                  color: "hover:text-cyan-400",
                },
              ].map(({ icon: Icon, href, label, color }) => (
                <MagneticButton key={label}>
                  <motion.a
                    href={href}
                    target="_blank" // 👈 ensures it opens in a new tab
                    rel="noopener noreferrer" // 👈 security best practice
                    data-cursor-text={label}
                    className={`w-12 h-12 bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl flex items-center justify-center text-gray-400 ${color} transition-all duration-300 group`}
                    whileHover={{ scale: 1.1, borderColor: "#00ffff" }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={20} />
                  </motion.a>
                </MagneticButton>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 100, rotateY: -15 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block perspective-1000"
          >
            <motion.div
              whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="transform-gpu"
            >
              <CodeWindow3D />
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
