import './Hero.css';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';
import Button from './Button';
import EventStream from './EventStream';
import { profile } from '../data/profile';
import { ease } from '../lib/motion';

const rise = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease },
});

const Hero = () => {
  return (
    <section id="hero" className="hero">
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.p className="hero-status" {...rise(0)}>
            <span className="hero-status-dot" aria-hidden="true" />
            {profile.availability}
          </motion.p>

          <motion.h1 className="hero-title" {...rise(0.08)}>
            {profile.name}
            <span className="hero-role">{profile.role}</span>
          </motion.h1>

          <motion.p className="hero-headline" {...rise(0.16)}>
            {profile.headline}
          </motion.p>

          <motion.p className="hero-summary" {...rise(0.22)}>
            {profile.summary}
          </motion.p>

          <motion.ul className="hero-focus mono" aria-label="Focus areas" {...rise(0.28)}>
            {profile.focus.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </motion.ul>

          <motion.div className="hero-actions" {...rise(0.34)}>
            <Button href="#projects">
              View projects <FiArrowRight aria-hidden="true" />
            </Button>
            <Button variant="secondary" href={profile.resume} download="Rajat-Baranwal-Resume.pdf">
              <FiDownload aria-hidden="true" /> Download resume
            </Button>
            <div className="hero-socials">
              <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease }}
        >
          <EventStream />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
