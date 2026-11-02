import './Section.css';
import { motion } from 'framer-motion';
import { reveal } from '../lib/motion';

const Section = ({ id, index, label, title, intro, children }) => {
  return (
    <section id={id} className="section" aria-labelledby={`${id}-title`}>
      <div className="container">
        <motion.header className="section-header" {...reveal}>
          <p className="section-eyebrow mono">
            <span className="section-index">{index}</span>
            <span className="section-rule" aria-hidden="true" />
            {label}
          </p>
          <h2 id={`${id}-title`} className="section-title">
            {title}
          </h2>
          {intro && <p className="section-intro">{intro}</p>}
        </motion.header>
        {children}
      </div>
    </section>
  );
};

export default Section;
