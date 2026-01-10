import './Projects.css';
import { motion } from 'framer-motion';

const projects = [
  { name: 'Real-Time Sales Streaming Pipeline', github: 'https://github.com/rajatbaranwal/real-time-sales-streaming-pipeline' },
  { name: 'Intelligent Stress Assessment Using Keystrokes', github: 'https://github.com/rajatbaranwal/intelligent-stress-assessment-using-keystrokes' },
  { name: 'RoadResQ – Frontend', github: 'https://github.com/rajatbaranwal/roadresq_frontend' },
  { name: 'RoadResQ – Backend', github: 'https://github.com/rajatbaranwal/roadresq_backkend' },
  { name: 'Real Estate AI Analysis', github: 'https://github.com/rajatbaranwal/real-estate-ai-analysis' },
  { name: 'Py Smart Shell', github: 'https://github.com/rajatbaranwal/py-smart-shell' },
  { name: 'Collaborative Canvas', github: 'https://github.com/rajatbaranwal/collaborative-canvas' },
  { name: 'MediQ – Frontend', github: 'https://github.com/rajatbaranwal/MediQ-Frontend' },
  { name: 'MediQ – Backend', github: 'https://github.com/rajatbaranwal/MediQ-b-ckend' },
  { name: 'Maersk Report Highlighter', github: 'https://github.com/rajatbaranwal/maersk-report-highlighter' },
  { name: 'Online Quiz System (XAMPP)', github: 'https://github.com/rajatbaranwal/Online-Quiz-System-Using-XAMPP' },
  { name: 'BookSphere', github: 'https://github.com/rajatbaranwal/BookSphere' },
  { name: 'Sentimental Analysis', github: 'https://github.com/rajatbaranwal/Sentimental_Analysis' },
  { name: 'Medicine App', github: 'https://github.com/rajatbaranwal/MedicineApp' },
  { name: 'Student DB Management', github: 'https://github.com/rajatbaranwal/Student-Database-Management-System' },
  { name: 'ToDo App (ReactJS)', github: 'https://github.com/rajatbaranwal/ToDo-With-ReactJS' },
  { name: 'Tomato Disease Detector (Blockchain)', github: 'https://github.com/rajatbaranwal/blockchain-tomato-disease-detector' },
  { name: 'Page Replacement Algo', github: 'https://github.com/rajatbaranwal/PageReplacementAlgo' },
  { name: 'Currency Converter', github: 'https://github.com/rajatbaranwal/CurrencyConverter' },
  { name: 'Password Generator', github: 'https://github.com/rajatbaranwal/Password-Generator' }
];

const Projects = () => {
  return (
    <motion.section
      id="projects"
      className="projects-container"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="projects-heading">My Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-card simple"
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03, y: -2 }}
          transition={{
            duration: 0.4,             
            delay: index * 0.02        
          }}
        >
        
            <h3>{project.name}</h3>
            <p>View on GitHub →</p>
          </motion.a>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;
