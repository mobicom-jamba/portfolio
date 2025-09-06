"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const codeSnippets = [
  {
    title: "portfolio.tsx",
    language: "TypeScript",
    lines: [
      "// Building the future, one line at a time",
      "",
      "interface Developer {",
      "  name: string;",
      "  role: string;",
      "  passion: string[];",
      "  experience: number;",
      "}",
      "",
      "const jamba: Developer = {",
      "  name: 'Jamba Ganzorig',",
      "  role: 'Senior Software Engineer',",
      "  passion: ['Innovation', 'Clean Code', 'UX'],",
      "  experience: 8",
      "};",
      "",
      "export default jamba;",
    ],
  },
  {
    title: "skills.js",
    language: "JavaScript",
    lines: [
      "const skills = {",
      "  frontend: [",
      "    'React', 'Next.js', 'TypeScript',",
      "    'Tailwind CSS', 'Framer Motion'",
      "  ],",
      "  backend: [",
      "    'Node.js', 'Python', 'PostgreSQL',",
      "    'MongoDB', 'GraphQL'",
      "  ],",
      "  cloud: [",
      "    'AWS', 'Docker', 'Kubernetes',",
      "    'Vercel', 'Serverless'",
      "  ]",
      "};",
      "",
      "console.log('Ready to build amazing things!');",
    ],
  },
];

export default function CodeWindow3D() {
  const [currentSnippet, setCurrentSnippet] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  useEffect(() => {
    const snippet = codeSnippets[currentSnippet];

    if (currentLineIndex < snippet.lines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines((prev) => [...prev, snippet.lines[currentLineIndex]]);
        setCurrentLineIndex((prev) => prev + 1);
      }, 200);
      return () => clearTimeout(timer);
    } else {
      // Switch to next snippet after delay
      const switchTimer = setTimeout(() => {
        setDisplayedLines([]);
        setCurrentLineIndex(0);
        setCurrentSnippet((prev) => (prev + 1) % codeSnippets.length);
      }, 3000);
      return () => clearTimeout(switchTimer);
    }
  }, [currentLineIndex, currentSnippet]);

  const currentSnippetData = codeSnippets[currentSnippet];

  return (
    <motion.div
      className="relative max-w-lg mx-auto"
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Floating decorative elements */}
      <motion.div
        className="absolute -top-4 -left-4 w-8 h-8 bg-cyan-400/20 rounded-full blur-sm"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute -bottom-4 -right-4 w-6 h-6 bg-purple-600/20 rounded-full blur-sm"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.8, 0.3, 0.8],
        }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
      />

      {/* Main code window */}
      <motion.div
        className="relative backdrop-blur-xl bg-gray-900/40 border border-gray-700/50 rounded-2xl overflow-hidden shadow-2xl"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 255, 255, 0.25)",
          borderColor: "rgba(0, 255, 255, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Window header */}
        <div className="flex items-center justify-between bg-gray-800/50 px-6 py-4 border-b border-gray-700/50">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <motion.div
                className="w-3 h-3 bg-red-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 bg-yellow-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
              <motion.div
                className="w-3 h-3 bg-green-500 rounded-full"
                whileHover={{ scale: 1.2 }}
              />
            </div>
            <div className="text-sm text-gray-400 font-mono ml-2">
              {currentSnippetData.title}
            </div>
          </div>
          <div className="text-xs text-gray-500 bg-gray-700/50 px-2 py-1 rounded">
            {currentSnippetData.language}
          </div>
        </div>

        {/* Code content */}
        <div className="p-6 font-mono text-sm leading-relaxed h-80 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSnippet}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {displayedLines.map((line, index) => (
                <motion.div
                  key={`${currentSnippet}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex hover:bg-gray-800/30 transition-colors duration-200 rounded px-2 py-0.5"
                >
                  <span className="text-gray-500 select-none w-8 text-right mr-4 text-xs">
                    {line.trim() !== "" ? index + 1 : ""}
                  </span>
                  <span className="text-gray-300 flex-1">
                    <SyntaxHighlight
                      line={line}
                      language={currentSnippetData.language}
                    />
                  </span>
                </motion.div>
              ))}

              {/* Animated cursor */}
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="inline-block w-2 h-5 bg-cyan-400 ml-1 mt-1"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Bottom glow effect */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 opacity-50" />
      </motion.div>
    </motion.div>
  );
}

// Syntax highlighting component
function SyntaxHighlight({
  line,
  language,
}: {
  line: string;
  language: string;
}) {
  if (line.includes("//")) {
    return <span className="text-gray-500 italic">{line}</span>;
  }

  if (language === "TypeScript") {
    if (
      line.includes("interface") ||
      line.includes("const") ||
      line.includes("export")
    ) {
      return (
        <span>
          {line.split(" ").map((word, i) => (
            <span key={i}>
              {["interface", "const", "export", "default"].includes(word) ? (
                <span className="text-purple-400">{word}</span>
              ) : ["string", "number"].includes(
                  word.replace(":", "").replace(";", "")
                ) ? (
                <span className="text-blue-400">{word}</span>
              ) : word.includes("'") || word.includes('"') ? (
                <span className="text-green-400">{word}</span>
              ) : (
                <span className="text-gray-300">{word}</span>
              )}
              {i < line.split(" ").length - 1 && " "}
            </span>
          ))}
        </span>
      );
    }
  }

  // Default rendering with basic highlighting
  return (
    <span>
      {line.split(" ").map((word, i) => (
        <span key={i}>
          {word.includes("'") || word.includes('"') ? (
            <span className="text-green-400">{word}</span>
          ) : word.includes("console") ? (
            <span className="text-blue-400">{word}</span>
          ) : (
            <span className="text-gray-300">{word}</span>
          )}
          {i < line.split(" ").length - 1 && " "}
        </span>
      ))}
    </span>
  );
}
