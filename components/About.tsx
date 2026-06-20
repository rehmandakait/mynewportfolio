"use client";

import { motion } from "motion/react";
import Image from "next/image";

export default function About() {
  const skills = [
    "Android", "iOS",
    "Kotlin", "Swift",
    "Go/Golang", "Python",
    "Node.js", "React.js",
    "TypeScript", "Rust",
    "Data Analysis", "System Design"
  ];

  return (
    <section id="about" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-10"
      >
        <span className="text-[#A3E635] font-mono text-xl">01.</span>
        <h2 className="text-3xl font-space font-bold text-[#F9F9F9]">
          About Me
        </h2>
        <div className="h-px bg-[#222] flex-grow max-w-xs ml-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="col-span-3 text-[#888] space-y-5 text-lg leading-relaxed"
        >
          <p>
            Hello! My name is Charan and I&apos;m an Android, Linux, and Web developer. 
            I enjoy building scalable systems, crafting native experiences for Android, and working with open-source tech. 
            My interest in development spans across mobile apps, backend architectures, 
            and diving deep into Linux environments to build performant solutions.
          </p>
          <p>
            Fast-forward to today, I have over 3+ years of experience and have successfully completed 
            20+ projects. I&apos;ve mastered over 10+ programming languages and frameworks, 
            constantly exploring new ways to build performant and resilient applications.
          </p>
          <p>Here are a few technologies I&apos;ve been mastering recently:</p>
          <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
            {skills.map((skill, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="text-[#A3E635]">►</span> {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="col-span-2 relative group"
        >
          <div className="relative w-full max-w-[300px] aspect-square mx-auto rounded-xl">
            <div className="absolute inset-0 border-2 border-[#A3E635] rounded-xl translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
            <div className="relative z-10 w-full h-full bg-[#222] rounded-xl overflow-hidden transition-all duration-500">
              {/* Fallback image if no personal photo is available */}
              <Image
                src="https://avatars.githubusercontent.com/u/224584449?v=4"
                alt="Charan Aerpula — Full-Stack Developer"
                fill
                className="object-cover transition-opacity"
                referrerPolicy="no-referrer"
                sizes="(max-width: 768px) 100vw, 300px"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
