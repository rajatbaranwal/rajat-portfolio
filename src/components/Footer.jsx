import './Footer.css';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import Logo from './Logo';
import { profile } from '../data/profile';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size={22} />
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
