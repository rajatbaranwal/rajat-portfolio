import './Skills.css';
import { motion } from 'framer-motion';
import { FiBox, FiCode, FiCpu, FiDatabase, FiLayers, FiLayout, FiServer, FiActivity } from 'react-icons/fi';
import Section from './Section';
import { revealItem } from '../lib/motion';
import { skillGroups } from '../data/profile';

const icons = {
  Languages: FiCode,
  'Backend & APIs': FiServer,
  Frontend: FiLayout,
  'AI & Speech Processing': FiCpu,
  Databases: FiDatabase,
  'Testing & Monitoring': FiActivity,
  'Tools & DevOps': FiBox,
  'Core Concepts': FiLayers,
};

const Skills = () => {
  return (
    <Section
      id="skills"
      index="03"
      label="Skills"
      title="Technical skills"
      intro="The languages, frameworks, and tools I use across backend, frontend, and AI work."
    >
      <div className="skills-grid">
        {skillGroups.map((group, i) => {
          const Icon = icons[group.title] ?? FiCode;
          return (
            <motion.div
              key={group.title}
              className="skill-group"
              {...revealItem((i % 4) * 0.06)}
            >
              <h3 className="skill-group-title">
                <Icon aria-hidden="true" />
                {group.title}
              </h3>
              <ul className="skill-list">
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
};

export default Skills;
