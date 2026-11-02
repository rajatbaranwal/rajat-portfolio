import './Education.css';
import { motion } from 'framer-motion';
import Section from './Section';
import { reveal } from '../lib/motion';
import { education } from '../data/profile';

const Education = () => {
  return (
    <Section id="education" index="04" label="Education" title="Education">
      <motion.article className="edu" {...reveal}>
        <div className="edu-main">
          <p className="edu-period mono">{education.period}</p>
          <h3 className="edu-degree">
            {education.degree}
            <span>{education.field}</span>
          </h3>
          <p className="edu-school">{education.school}</p>
        </div>

        <dl className="edu-facts">
          {education.facts.map((fact) => (
            <div key={fact.label}>
              <dt className="mono">{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </motion.article>
    </Section>
  );
};

export default Education;
