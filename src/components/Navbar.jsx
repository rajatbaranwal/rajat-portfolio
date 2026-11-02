import './Navbar.css';
import { useEffect, useState } from 'react';
import { FiMenu, FiX, FiArrowUpRight } from 'react-icons/fi';
import Logo from './Logo';
import { profile } from '../data/profile';

const links = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Education' },
  { id: 'credentials', label: 'Credentials' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Highlight the section currently in the middle band of the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' }
    );
    ['hero', ...links.map((l) => l.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar-solid' : ''}`}>
      <nav className="navbar-inner container" aria-label="Primary">
        <a href="#hero" className="navbar-brand" onClick={closeMenu}>
          <Logo size={26} />
          <span>{profile.name}</span>
        </a>

        <ul className="navbar-links">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className={active === link.id ? 'is-active' : undefined}
                aria-current={active === link.id ? 'true' : undefined}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          <a
            href={profile.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-resume"
          >
            Resume <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            type="button"
            className="navbar-toggle"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`navbar-mobile ${menuOpen ? 'is-open' : ''}`} hidden={!menuOpen}>
        <ul className="container">
          {links.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={profile.resume} target="_blank" rel="noopener noreferrer" onClick={closeMenu}>
              Resume <FiArrowUpRight aria-hidden="true" />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
