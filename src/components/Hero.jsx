import { motion } from "framer-motion";
import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <motion.h1
        className="hero-title"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Hi, I'm
        </motion.span>
        <br />
        <motion.span
          className="gradient-name"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          Rajat
        </motion.span>
      </motion.h1>

      <motion.p
        className="hero-subtitle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Typewriter
          words={[
            "Full Stack Developer",
            "Problem Solver",
            "Tech Enthusiast",
            "Open Source Contributor",
          ]}
          loop={0} // infinite
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.p>

      <img
        src="/pixel-jeff-matrix-s.gif"
        alt="Rajat Hacker Avatar"
        className="hero-avatar"
      />

      <div className="hero-buttons">
        <motion.a
          href="#projects"
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          See My Work
        </motion.a>

        <motion.a
          href="/Rajat-Baranwal-Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hero-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Resume
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
