import './Projects.css';
import { motion } from 'framer-motion';
import { FiArrowUpRight, FiGithub } from 'react-icons/fi';
import Button from './Button';
import Section from './Section';
import { reveal, revealItem } from '../lib/motion';
import { Badge, KindTag } from './Badge';
import { featuredWork, moreProjects, profile, projects } from '../data/profile';

const Projects = () => {
  return (
    <Section
      id="projects"
      index="02"
      label="Projects"
      title="Selected work"
      intro="What I built, how it works, and the problem each one addresses."
    >
      <motion.article className="featured" {...reveal}>
        <div className="featured-head">
          <div>
            <p className="featured-tagline mono">{featuredWork.tagline}</p>
            <h3 className="featured-name">{featuredWork.name}</h3>
            <p className="featured-note">{featuredWork.note}</p>
          </div>
          <Button variant="secondary" size="sm" href={featuredWork.url} target="_blank" rel="noopener noreferrer">
            {featuredWork.urlLabel} <FiArrowUpRight aria-hidden="true" />
          </Button>
        </div>

        <div className="featured-groups">
          {featuredWork.groups.map((group) => (
            <div key={group.kind} className="featured-group">
              <KindTag kind={group.kind} />
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.article>

      <div className="project-grid">
        {projects.map((project, i) => (
          <motion.article
            key={project.name}
            className="project"
            {...revealItem(i * 0.08)}
          >
            <p className="project-tagline mono">{project.tagline}</p>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-problem">{project.problem}</p>

            <ul className="project-points">
              {project.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            <div className="project-tech">
              {project.tech.map((t) => (
                <Badge key={t}>{t}</Badge>
              ))}
            </div>

            <div className="project-links">
              {project.repos.map((repo) => (
                <a key={repo.url} href={repo.url} target="_blank" rel="noopener noreferrer">
                  <FiGithub aria-hidden="true" />
                  {repo.label}
                  <span className="sr-only"> repository for {project.name}</span>
                </a>
              ))}
            </div>
          </motion.article>
        ))}
      </div>

      <motion.div className="more-projects" {...reveal}>
        <div className="more-head">
          <h3>More on GitHub</h3>
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="more-all mono">
            github.com/rajatbaranwal <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <ul className="more-list">
          {moreProjects.map((repo) => (
            <li key={repo.url}>
              <a href={repo.url} target="_blank" rel="noopener noreferrer">
                <span>{repo.name}</span>
                <FiArrowUpRight aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
};

export default Projects;
