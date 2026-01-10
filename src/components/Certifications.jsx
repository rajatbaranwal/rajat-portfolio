import './Certifications.css';
import { motion } from 'framer-motion';

const certifications = [
  {
    name: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle University',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DB6F2D28C4ED27CE78A4084C24EF9836F2DB8FDF3FB01C82C45794EAD703B616'
  },
  {
    name: 'Oracle Cloud Infrastructure 2025 Certified Data Science Professional',
    issuer: 'Oracle University',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=505B7516E38411BBC74AA2B028392D09474BA964C7D8161EB6B78718824A451C'
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CKMZ8NT98E24'
  },
  {
    name: 'AWS Fundamentals Specialization',
    issuer: 'Coursera',
    link: 'https://www.coursera.org/account/accomplishments/specialization/certificate/28QCD3ZXM2NF'
  },
  
  {
    name: 'Google Cloud Skill Badges (15 Badges)',
    issuer: 'Google Cloud',
    link: 'https://www.credly.com/users/rajat-baranwal/badges#credly'
  },
  {
    name: 'Big Data Integration and Processing',
    issuer: 'UC San Diego',
    link: 'https://www.coursera.org/account/accomplishments/certificate/QQ7XUYP5PBD6'
  },
  
  {
    name: 'Building Your Leadership Skills',
    issuer: 'HEC Paris',
    link: 'https://www.coursera.org/account/accomplishments/certificate/USCRALWZMPJ7'
  }
];

const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="certifications-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="certifications-heading">Certifications</h2>

      <div className="certifications-grid">
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card simple"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, y: -2 }}
            transition={{
              duration: 0.4,
              delay: index * 0.02
            }}
          >
            <h3>{cert.name}</h3>
            <p>{cert.issuer}</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Certifications;
