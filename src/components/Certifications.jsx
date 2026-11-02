import './Certifications.css';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiAward, FiBookOpen } from 'react-icons/fi';
import Section from './Section';
import { reveal, revealItem } from '../lib/motion';
import { additionalCertificates, credentials } from '../data/profile';

const Certifications = () => {
  return (
    <Section
      id="credentials"
      index="05"
      label="Credentials"
      title="Certifications & achievements"
    >
      <div className="cred-grid">
        {credentials.map((cred, i) => {
          const Icon = cred.kind === 'Publication' ? FiBookOpen : FiAward;
          return (
            <motion.a
              key={cred.name}
              href={cred.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`cred ${cred.kind === 'Publication' ? 'cred-highlight' : ''}`}
              {...revealItem(i * 0.06)}
            >
              <div className="cred-top">
                <span className="cred-icon">
                  <Icon aria-hidden="true" />
                </span>
                <span className="cred-year mono">{cred.year}</span>
              </div>
              <p className="cred-kind mono">{cred.kind}</p>
              <h3 className="cred-name">{cred.name}</h3>
              {cred.title && (
                <p className="cred-title">
                  <span className="sr-only">Paper title: </span>“{cred.title}”
                </p>
              )}
              <p className="cred-issuer">{cred.detail ?? cred.issuer}</p>
              <span className="cred-view">
                View credential <FiArrowUpRight aria-hidden="true" />
              </span>
            </motion.a>
          );
        })}
      </div>

      <motion.div className="cred-more" {...reveal}>
        <h3 className="cred-more-title mono">Additional certificates</h3>
        <ul>
          {additionalCertificates.map((cert) => (
            <li key={cert.url}>
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                {cert.name}
                <span>{cert.issuer}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
};

export default Certifications;
