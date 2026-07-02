import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";
import { ArrowRight, Download } from "lucide-react";
import { personalInfo } from "@/data/personal";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center py-16 scroll-mt-32"
    >
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-accent font-semibold tracking-[0.2em] text-sm uppercase mb-4"
      >
        Hi, I&apos;m
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-white"
      >
        {personalInfo.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-4 font-heading text-2xl sm:text-3xl font-semibold text-secondary"
      >
        <TypeAnimation
          sequence={personalInfo.taglines.flatMap((t) => [t, 2000])}
          wrapper="span"
          speed={50}
          className="text-gradient"
          repeat={Infinity}
        />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-6 max-w-xl text-secondary leading-relaxed text-base sm:text-lg"
      >
        {personalInfo.heroDescription}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-9 flex flex-wrap items-center gap-4"
      >
        <Link to="projects" smooth={true} duration={600} offset={-110}>
          <motion.span
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-accent text-white font-semibold px-6 py-3 rounded-xl cursor-pointer shadow-lg shadow-accent/20"
          >
            View Projects
            <ArrowRight size={18} />
          </motion.span>
        </Link>

        <motion.a
          href={personalInfo.resumeUrl}
          download
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center gap-2 border border-border text-white font-semibold px-6 py-3 rounded-xl hover:border-accent/50 transition-colors"
        >
          <Download size={18} />
          Download Resume
        </motion.a>
      </motion.div>
    </section>
  );
}
