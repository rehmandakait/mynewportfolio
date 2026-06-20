import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-[#A3E635]/30">
      <div className="max-w-6xl mx-auto px-6 sm:px-12 md:px-24 xl:px-48">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
