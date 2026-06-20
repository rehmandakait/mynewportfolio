"use client";

import { motion } from "motion/react";

export default function Projects() {
  const projects = [
    {
      name: "Signal Server",
      description: "Open-source WebRTC signaling server handling SDP negotiation and ICE candidate exchange, built with JavaScript and Node.js.",
      tech_stack: ["JavaScript", "WebRTC", "Node.js"],
      type: "Backend / Infra"
    },
    {
      name: "Call & Transcribe",
      description: "Full-featured browser video calling platform with real-time speech transcription using the Web Audio API.",
      tech_stack: ["TypeScript", "Node.js", "WebRTC"],
      type: "Full-Stack"
    },
    {
      name: "TrickGPS Mock Location",
      description: "Android app for simulating GPS location spoofing during testing, built with Kotlin.",
      tech_stack: ["Kotlin", "Android", "GPS"],
      type: "Mobile"
    },
    {
      name: "EvilGPS",
      description: "Android GPS manipulation tool for security research and testing of location-based services.",
      tech_stack: ["Kotlin", "Android", "Location Services"],
      type: "Security / Tools"
    },
    {
      name: "OU Results Scraper",
      description: "Python web scraper for extracting and processing academic results from Osmania University.",
      tech_stack: ["Python", "Web Scraping", "Data"],
      type: "Data Engineering"
    },
    {
      name: "YouTube Scraper",
      description: "Python tool for scraping YouTube video metadata, analytics, and channel information.",
      tech_stack: ["Python", "Web Scraping", "APIs"],
      type: "Data Engineering"
    },
    {
      name: "YT Music Downloader",
      description: "Browser-based web app for downloading audio from YouTube videos using the YouTube API.",
      tech_stack: ["HTML/CSS", "JavaScript", "API"],
      type: "Web Tool"
    },
    {
      name: "XGPS",
      description: "JavaScript-based GPS tracking and geolocation manipulation tool for the web.",
      tech_stack: ["JavaScript", "Geolocation API"],
      type: "Web Tool"
    },
    {
      name: "Grey Dialer",
      description: "Feature-rich Android phone call management app built with Kotlin and Android Telephony APIs.",
      tech_stack: ["Kotlin", "Android", "Telephony"],
      type: "Mobile / Telecom"
    },
    {
      name: "Minxy",
      description: "Android app demonstrating modern Kotlin development patterns and best practices.",
      tech_stack: ["Kotlin", "Android"],
      type: "Mobile"
    },
    {
      name: "Naruto GRUB Bootloader",
      description: "Custom GRUB bootloader theme featuring Naruto aesthetics.",
      tech_stack: ["GRUB", "Linux", "Theming"],
      type: "Linux / Theming"
    }
  ];

  return (
    <section id="projects" className="py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="flex items-center gap-4 mb-16"
      >
        <span className="text-[#A3E635] font-mono text-xl">02.</span>
        <h2 className="text-3xl font-space font-bold text-[#F9F9F9]">
          Selected Works
        </h2>
        <div className="h-px bg-[#222] flex-grow max-w-xs ml-4"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
            className={`relative bg-[#0F0F0F] border border-[#1A1A1A] p-6 lg:p-8 flex flex-col justify-between group overflow-hidden ${
              i === 0 || i === 3 || i === 6 ? "md:col-span-2 md:flex-row md:items-center gap-8" : "gap-6"
            }`}
          >
            {/* The gradient blob background */}
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-[#A3E635]/10 blur-3xl transition-all duration-700 group-hover:bg-[#A3E635]/20 group-hover:scale-150"></div>
            
            <div className={`flex flex-col justify-between z-10 w-full ${i === 0 || i === 3 || i === 6 ? "md:w-1/2 min-h-[160px]" : "flex-1"}`}>
              <div className="flex justify-between items-start mb-8">
                <span className="text-[10px] font-mono text-[#555] uppercase tracking-widest">{project.type}</span>
                {i < 3 && <div className="w-1.5 h-1.5 rounded-full bg-[#A3E635]"></div>}
              </div>
              
              <h3 className={`font-space font-bold text-[#F9F9F9] group-hover:text-[#A3E635] transition-colors mb-2 ${
                i === 0 || i === 3 || i === 6 ? "text-3xl lg:text-4xl leading-tight" : "text-2xl"
              }`}>
                {project.name}
              </h3>
            </div>

            <div className={`flex flex-col gap-4 mt-auto z-10 w-full ${i === 0 || i === 3 || i === 6 ? "md:mt-0 md:w-1/2 md:items-end min-h-[160px] justify-between" : "flex-1 justify-end"}`}>
              <p className={`text-sm text-[#888] leading-relaxed ${i === 0 || i === 3 || i === 6 ? "md:text-right max-w-[320px]" : ""}`}>
                {project.description}
              </p>
              
              <ul className={`flex flex-wrap gap-2 font-mono text-[10px] uppercase tracking-widest text-[#555] mt-auto pt-4 ${i === 0 || i === 3 || i === 6 ? "md:justify-end" : ""}`}>
                {project.tech_stack.map((tech, j) => (
                  <li key={j} className="border border-[#1A1A1A] px-2 py-1 bg-[#151515]">{tech}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
