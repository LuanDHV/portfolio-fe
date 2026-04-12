"use client";

import { motion } from "framer-motion";
import CodePortal from "@/src/components/ui/CodePortal";
import HeroDetails from "@/src/components/ui/HeroDetails";

export default function HeroSection() {
  return (
    <section className="relative h-screen overflow-hidden py-10">
      <div className="relative z-10 mx-auto flex h-full w-full max-w-7xl items-center px-6">
        <div className="grid w-full gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <HeroDetails />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <CodePortal />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
