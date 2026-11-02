// Single source of truth for portfolio content.
// Everything here mirrors public/Rajat-Baranwal-Resume.pdf — keep the two in sync.

export const profile = {
  name: 'Rajat Baranwal',
  role: 'Software Engineer',
  focus: ['Full Stack', 'Backend Engineering', 'AI Integration'],
  headline: 'I build backend services, real-time systems, and AI-powered web products.',
  summary:
    'Most recently a Software Engineer Intern at XiPHI AI, working on myEventz.ai — attendee onboarding, live speech-to-text over WebSockets, and translation caching. B.Tech in Computer Science, SRM University AP.',
  availability: 'Open to Software Engineer, Backend & Full Stack roles',
  resume: '/Rajat-Baranwal-Resume.pdf',
  email: 'rajat123baranwal@gmail.com',
  phone: '+91-9934275919',
  links: {
    github: 'https://github.com/rajatbaranwal',
    linkedin: 'https://www.linkedin.com/in/rajat-baranwal/',
    x: 'https://x.com/RajatBaran58997',
  },
  codingProfiles: [
    { name: 'LeetCode', url: 'https://leetcode.com/u/rajat_bar/' },
    { name: 'CodeChef', url: 'https://www.codechef.com/users/rajat_80' },
    { name: 'HackerRank', url: 'https://www.hackerrank.com/profile/AP22110011534' },
  ],
};

// `kind` states ownership honestly: what I built vs. integrated, evaluated, or tested.
export const experience = [
  {
    company: 'XiPHI AI',
    location: 'Seattle, WA, USA',
    mode: 'Remote',
    role: 'Software Engineer Intern',
    period: 'April 2026 – October 2026',
    product: { name: 'myEventz.ai', url: 'https://onboard.myeventz.ai' },
    summary:
      'Worked on myEventz.ai, an AI-powered event platform — attendee onboarding, real-time transcription and translation, speech-processing evaluation, and backend performance testing.',
    contributions: [
      {
        kind: 'Built',
        title: 'Attendee onboarding platform',
        detail:
          'Developed onboard.myeventz.ai with registration workflows, integrating FastAPI endpoints and n8n webhooks for attendee data submission and processing.',
        tech: ['FastAPI', 'n8n', 'Webhooks'],
      },
      {
        kind: 'Built',
        title: 'Real-time speech-to-text pipeline',
        detail:
          'Engineered streaming transcription with asynchronous audio streaming and handling of partial and finalized transcription events.',
        tech: ['Python', 'FastAPI', 'WebSockets', 'ElevenLabs Scribe v2'],
      },
      {
        kind: 'Built',
        title: 'Live transcript & translation UI',
        detail:
          'Developed frontend interfaces for real-time transcription and translation, integrating FastAPI services to display live transcripts and translated content.',
        tech: ['Frontend', 'FastAPI'],
      },
      {
        kind: 'Built',
        title: 'Translation caching',
        detail:
          'Implemented PostgreSQL-backed caching to reuse previously generated translations and avoid redundant Gemini-powered n8n workflow executions.',
        tech: ['PostgreSQL', 'Gemini', 'n8n'],
      },
      {
        kind: 'Integrated',
        title: 'CAPTCHA & production fixes',
        detail:
          'Integrated Cloudflare Turnstile verification and resolved production issues across Next.js environment variables, Docker build arguments, and container configs.',
        tech: ['Cloudflare Turnstile', 'Docker', 'Next.js'],
      },
      {
        kind: 'Tested',
        title: 'Load & performance testing',
        detail:
          'Ran API load tests and analysed dashboards to find request failures, response latency, and backend bottlenecks under simulated concurrent-user loads.',
        tech: ['Apache JMeter', 'Grafana'],
      },
      {
        kind: 'Evaluated',
        title: 'Faster-Whisper pipelines',
        detail:
          'Evaluated transcription pipelines using audio chunking, overlapping windows, and Voice Activity Detection (VAD).',
        tech: ['Faster-Whisper', 'VAD', 'Python'],
      },
      {
        kind: 'Tested',
        title: 'QR ticketing workflows',
        detail:
          'Validated QR-based ticket scanning, including attendee check-in and duplicate scan detection.',
        tech: ['QR scanning', 'Check-in flows'],
      },
    ],
  },
];

export const featuredWork = {
  name: 'myEventz.ai',
  tagline: 'AI-powered event platform · XiPHI AI',
  note: 'A company product. These are the parts I worked on during my internship.',
  url: 'https://onboard.myeventz.ai',
  urlLabel: 'onboard.myeventz.ai',
  groups: [
    {
      kind: 'Built',
      items: [
        'Attendee onboarding & registration flows',
        'Real-time speech-to-text over WebSockets',
        'Live transcript & translation interfaces',
        'PostgreSQL translation cache',
      ],
    },
    {
      kind: 'Integrated',
      items: [
        'FastAPI backend endpoints',
        'n8n webhooks & Gemini workflows',
        'ElevenLabs Scribe v2 Realtime',
        'Cloudflare Turnstile CAPTCHA',
      ],
    },
    {
      kind: 'Evaluated & tested',
      items: [
        'Faster-Whisper with chunking & VAD',
        'API load testing with JMeter + Grafana',
        'QR check-in & duplicate scan detection',
      ],
    },
  ],
};

export const projects = [
  {
    name: 'RoadResQ',
    tagline: 'Roadside assistance platform',
    problem:
      'Stranded drivers and service providers need to see each other’s location continuously, not as one-off updates.',
    points: [
      'Live geolocation tracking with Leaflet and Socket.IO for continuous location updates between users and providers',
      'OpenStreetMap integration for real-time tracking and geolocation services',
      'JWT authentication with role-based dashboards, deployed on cloud platforms',
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Socket.IO', 'Leaflet', 'JWT'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/rajatbaranwal/roadresq_frontend' },
      { label: 'Backend', url: 'https://github.com/rajatbaranwal/roadresq_backkend' },
    ],
  },
  {
    name: 'MediQ',
    tagline: 'Hospital management system',
    problem:
      'Hospitals juggle OPD queues, bed availability, and inventory across roles that should only see what they need.',
    points: [
      'JWT authentication and role-based access control across patient workflows and resource allocation',
      'REST APIs for OPD queue management, bed allocation, and inventory with Node.js and Express.js',
      'MongoDB schema design; deployed on Vercel and Render with a CI/CD pipeline',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
    repos: [
      { label: 'Frontend', url: 'https://github.com/rajatbaranwal/MediQ-Frontend' },
      { label: 'Backend', url: 'https://github.com/rajatbaranwal/MediQ-b-ckend' },
    ],
  },
  {
    name: 'Sales Streaming Pipeline',
    tagline: 'Real-time data pipeline',
    problem:
      'Sales metrics are most useful as they happen — batch reports arrive too late to act on.',
    points: [
      'Kafka producer–consumer architecture streaming continuous sales data into PostgreSQL',
      'Streamlit dashboard refreshing every 30 seconds with revenue, trends, and live KPIs',
      'Automated data generation with Faker, ingested through Kafka topics into a structured warehouse',
    ],
    tech: ['Kafka', 'PostgreSQL', 'Python', 'Streamlit', 'Faker'],
    repos: [
      { label: 'Repository', url: 'https://github.com/rajatbaranwal/real-time-sales-streaming-pipeline' },
    ],
  },
];

export const moreProjects = [
  { name: 'Intelligent Stress Assessment Using Keystrokes', url: 'https://github.com/rajatbaranwal/intelligent-stress-assessment-using-keystrokes' },
  { name: 'Real Estate AI Analysis', url: 'https://github.com/rajatbaranwal/real-estate-ai-analysis' },
  { name: 'Collaborative Canvas', url: 'https://github.com/rajatbaranwal/collaborative-canvas' },
  { name: 'Py Smart Shell', url: 'https://github.com/rajatbaranwal/py-smart-shell' },
  { name: 'Maersk Report Highlighter', url: 'https://github.com/rajatbaranwal/maersk-report-highlighter' },
  { name: 'Tomato Disease Detector (Blockchain)', url: 'https://github.com/rajatbaranwal/blockchain-tomato-disease-detector' },
  { name: 'Sentiment Analysis', url: 'https://github.com/rajatbaranwal/Sentimental_Analysis' },
  { name: 'BookSphere', url: 'https://github.com/rajatbaranwal/BookSphere' },
  { name: 'Online Quiz System', url: 'https://github.com/rajatbaranwal/Online-Quiz-System-Using-XAMPP' },
  { name: 'Page Replacement Algorithms', url: 'https://github.com/rajatbaranwal/PageReplacementAlgo' },
];

export const skillGroups = [
  { title: 'Languages', skills: ['Python', 'C++', 'Java', 'JavaScript'] },
  { title: 'Backend & APIs', skills: ['FastAPI', 'Node.js', 'Express.js', 'RESTful APIs', 'WebSockets'] },
  { title: 'Frontend', skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS'] },
  {
    title: 'AI & Speech Processing',
    skills: ['Gemini', 'ElevenLabs Scribe v2', 'Faster-Whisper', 'Speech-to-Text', 'Audio Chunking', 'VAD'],
  },
  { title: 'Databases', skills: ['PostgreSQL', 'MongoDB', 'MySQL'] },
  {
    title: 'Testing & Monitoring',
    skills: ['Apache JMeter', 'Grafana', 'API Testing', 'Performance Testing', 'Load Testing'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Docker', 'Docker Compose', 'Git', 'GitHub', 'Postman', 'n8n', 'AWS', 'GCP', 'Cloudflare Turnstile'],
  },
  { title: 'Core Concepts', skills: ['Data Structures & Algorithms', 'OOP', 'Asynchronous Programming'] },
];

export const education = {
  school: 'SRM University, Andhra Pradesh',
  degree: 'Bachelor of Technology',
  field: 'Computer Science and Engineering',
  period: '2022 – 2026',
  facts: [
    { label: 'CGPA', value: '8.24 / 10' },
    { label: 'Merit Scholarship', value: '85%' },
  ],
};

export const credentials = [
  {
    name: 'Research Paper Co-Author',
    title:
      'An Intelligent Stress Assessment System Using Keystroke Timing, Error Rate, and Typing Metrics',
    detail: 'IEEE CI2A 2026 · Published on IEEE Xplore',
    issuer: 'IEEE',
    year: '2026',
    kind: 'Publication',
    url: 'https://ieeexplore.ieee.org/abstract/document/11576810/',
  },
  {
    name: 'Oracle Certified Professional: Java SE 11 Developer',
    issuer: 'Oracle',
    year: '2025',
    kind: 'Certification',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=DB6F2D28C4ED27CE78A4084C24EF9836F2DB8FDF3FB01C82C45794EAD703B616',
  },
  {
    name: 'AWS Fundamentals Specialization',
    issuer: 'Amazon Web Services · Coursera',
    year: '2025',
    kind: 'Certification',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/28QCD3ZXM2NF',
  },
  {
    name: 'Google Cloud Platform — 15 Skill Badges',
    issuer: 'Google Cloud · Cloud Computing & AI',
    year: '2024',
    kind: 'Badges',
    url: 'https://www.credly.com/users/rajat-baranwal/badges',
  },
];

export const additionalCertificates = [
  {
    name: 'OCI 2025 Certified Data Science Professional',
    issuer: 'Oracle',
    url: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=505B7516E38411BBC74AA2B028392D09474BA964C7D8161EB6B78718824A451C',
  },
  {
    name: 'Google Data Analytics Professional Certificate',
    issuer: 'Coursera',
    url: 'https://www.coursera.org/account/accomplishments/specialization/certificate/CKMZ8NT98E24',
  },
  {
    name: 'Big Data Integration and Processing',
    issuer: 'UC San Diego',
    url: 'https://www.coursera.org/account/accomplishments/certificate/QQ7XUYP5PBD6',
  },
  {
    name: 'Building Your Leadership Skills',
    issuer: 'HEC Paris',
    url: 'https://www.coursera.org/account/accomplishments/certificate/USCRALWZMPJ7',
  },
];
