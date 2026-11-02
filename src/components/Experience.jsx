import './Experience.css';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import Section from './Section';
import { reveal, revealItem } from '../lib/motion';
import { Badge, KindTag } from './Badge';
import { experience } from '../data/profile';

const Experience = () => {
  return (
    <Section
      id="experience"
      index="01"
      label="Experience"
      title="Professional experience"
      intro="Production work on a real-time, AI-powered event platform. Each item is labelled by what I did with it — built, integrated, evaluated, or tested."
    >
      <ol className="timeline">
        {experience.map((job) => (
          <li key={job.company} className="timeline-item">
            <span className="timeline-node" aria-hidden="true" />

            <motion.div className="job" {...reveal}>
              <div className="job-meta">
                <p className="job-period mono">{job.period}</p>
                <h3 className="job-role">{job.role}</h3>
                <p className="job-company">{job.company}</p>
                <p className="job-location">
                  <FiMapPin aria-hidden="true" /> {job.location} · {job.mode}
                </p>
                <p className="job-summary">{job.summary}</p>
                {job.product && (
                  <a className="job-link mono" href={job.product.url} target="_blank" rel="noopener noreferrer">
                    {job.product.url.replace('https://', '')} <FiArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>

              <ul className="job-contributions">
                {job.contributions.map((item, i) => (
                  <motion.li
                    key={item.title}
                    className="contribution"
                    {...revealItem((i % 2) * 0.08)}
                  >
                    <KindTag kind={item.kind} />
                    <h4 className="contribution-title">{item.title}</h4>
                    <p className="contribution-detail">{item.detail}</p>
                    <div className="contribution-tech">
                      {item.tech.map((t) => (
                        <Badge key={t}>{t}</Badge>
                      ))}
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </li>
        ))}
      </ol>
    </Section>
  );
};

export default Experience;
