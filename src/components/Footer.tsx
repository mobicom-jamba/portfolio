"use client";

import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "About", href: "#about" },
        { name: "Experience", href: "#experience" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Technologies",
      links: [
        { name: "React & Next.js", href: "#" },
        { name: "TypeScript", href: "#" },
        { name: "Node.js", href: "#" },
        { name: "Cloud Architecture", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { name: "GitHub", href: "https://github.com/jambacx/" },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/thejamba/" },
        { name: "Email", href: "mailto:jamba.div@gmail.com" },
      ],
    },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-950 to-black border-t border-gray-800/50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-radial from-cyan-400/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-radial from-purple-600/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <motion.h3
                className="text-2xl font-mono font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-4"
                whileHover={{ scale: 1.05 }}
              >
                Jamba Ganzorig
              </motion.h3>
              <p className="text-gray-400 leading-relaxed mb-6">
                Senior Software Engineer passionate about creating exceptional
                digital experiences with modern technologies and innovative
                solutions.
              </p>

              {/* Scroll to top button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-lg text-gray-300 hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-300"
                data-cursor-text="Back to top"
              >
                <ArrowUp size={16} />
                Back to top
              </motion.button>
            </motion.div>

            {/* Links sections */}
            {footerLinks.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <h4 className="text-white font-semibold mb-6">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5, color: "#00ffff" }}
                        className="text-gray-400 hover:text-cyan-400 transition-all duration-300 block"
                        data-cursor-text={link.name}
                      >
                        {link.name}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="py-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p
              className="text-gray-400 text-sm flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
            >
              © {currentYear} Jamba Ganzorig. Made with{" "}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-red-400"
              >
                <Heart size={14} fill="currentColor" />
              </motion.span>{" "}
              and lots of coffee
            </motion.p>

            <motion.div
              className="flex items-center gap-6 text-sm text-gray-400"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#"
                whileHover={{ color: "#00ffff" }}
                className="hover:text-cyan-400 transition-colors"
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ color: "#00ffff" }}
                className="hover:text-cyan-400 transition-colors"
              >
                Terms of Service
              </motion.a>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 bg-gradient-to-r from-cyan-400/10 to-purple-600/10 border border-cyan-400/20 rounded-full text-cyan-400"
              >
                Available for hire
              </motion.span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
