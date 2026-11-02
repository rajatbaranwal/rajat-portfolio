import './Contact.css';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { useRef, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin, FiPhone } from 'react-icons/fi';
import { FaXTwitter } from 'react-icons/fa6';
import Button from './Button';
import Section from './Section';
import { reveal } from '../lib/motion';
import { profile } from '../data/profile';

// EmailJS public identifiers — these are designed to be exposed client-side.
const EMAILJS = {
  serviceId: 'service_wmnp2d2',
  templateId: 'template_x08k6rp',
  publicKey: 'ZWSGwpf7Ib7bYmllk',
};

const socials = [
  { label: 'LinkedIn', href: profile.links.linkedin, icon: FiLinkedin, handle: 'in/rajat-baranwal' },
  { label: 'GitHub', href: profile.links.github, icon: FiGithub, handle: 'rajatbaranwal' },
  { label: 'X', href: profile.links.x, icon: FaXTwitter, handle: '@RajatBaran58997' },
  { label: 'Phone', href: `tel:${profile.phone}`, icon: FiPhone, handle: profile.phone },
];

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [copied, setCopied] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');
    emailjs
      .sendForm(EMAILJS.serviceId, EMAILJS.templateId, form.current, EMAILJS.publicKey)
      .then((res) => {
        if (res?.status !== 200) throw res;
        setStatus('sent');
        form.current.reset();
      })
      .catch((err) => {
        // EmailJS rejects with { status, text }; text is its error message (no credentials or form data).
        console.error('[contact] EmailJS send failed', {
          status: err?.status ?? 'network',
          message: err?.text ?? err?.message ?? String(err),
        });
        setStatus('error');
      });
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <Section
      id="contact"
      index="06"
      label="Contact"
      title="Let’s talk"
      intro="I’m looking for Software Engineer, Backend, and Full Stack roles. The fastest way to reach me is email."
    >
      <div className="contact-grid">
        <motion.div className="contact-info" {...reveal}>
          <div className="contact-email">
            <a href={`mailto:${profile.email}`} className="contact-email-link">
              {profile.email}
            </a>
            <button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copy email address">
              {copied ? <FiCheck /> : <FiCopy />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <ul className="contact-socials">
            {socials.map(({ label, href, icon: Icon, handle }) => {
              const external = href.startsWith('http');
              return (
                <li key={label}>
                  <a href={href} {...(external && { target: '_blank', rel: 'noopener noreferrer' })}>
                    <Icon aria-hidden="true" />
                    <span className="contact-social-label">{label}</span>
                    <span className="contact-social-handle mono">{handle}</span>
                    {external && <FiArrowUpRight className="contact-social-arrow" aria-hidden="true" />}
                  </a>
                </li>
              );
            })}
          </ul>

          <p className="contact-profiles">
            <span className="mono">Coding profiles</span>
            {profile.codingProfiles.map((p) => (
              <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer">
                {p.name}
              </a>
            ))}
          </p>
        </motion.div>

        <motion.form ref={form} onSubmit={sendEmail} className="contact-form" {...reveal}>
          <div className="field-row">
            <label className="field">
              <span>Name</span>
              <input type="text" name="user_name" autoComplete="name" required />
            </label>
            <label className="field">
              <span>Email</span>
              <input type="email" name="user_email" autoComplete="email" required />
            </label>
          </div>
          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="5" required />
          </label>

          <div className="form-footer">
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </Button>
            <p className={`form-status form-status-${status}`} role="status">
              {status === 'sent' && 'Thanks — your message was sent.'}
              {status === 'error' && 'Something went wrong. Please email me directly.'}
            </p>
          </div>
        </motion.form>
      </div>
    </Section>
  );
};

export default Contact;
