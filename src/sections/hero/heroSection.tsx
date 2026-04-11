"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="h-screen flex items-center px-10">
      <div>
        <motion.h1
          className="text-6xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Building scalable <br />
          <span className="text-indigo-400">fullstack systems</span>
        </motion.h1>

        <motion.p
          className="mt-6 text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Performance-focused web applications with real-world impact.
        </motion.p>
      </div>
    </section>
  );
}
