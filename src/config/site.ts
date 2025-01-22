import { JavaIcon, NextjsIcon, PythonIcon, SpringBootIcon, TailwindIcon, TypeScriptIcon } from '@/components/icons/icons';
import ExperienceSection from '@/components/sections/Experience';
import HomeSection from '@/components/sections/Home';
import ProfileCard from '@/components/sections/Profile';
import ProjectsSection from '@/components/sections/Projects';
import SkillsSection from '@/components/sections/Skills';
import StudiesSection from '@/components/sections/Studies';
import { FaBookOpen, FaCode, FaDev, FaHouse, FaImagePortrait, FaLaptopCode } from 'react-icons/fa6';

export const siteConfig = {
  title: 'Resume',
  description: 'Diego Montes Novio - Developer',
  author: 'Diego Montes Novio',
  email: 'diego.montes@outlook.com',
  url: 'https://dmndev-resume.vercel.app',
  keywords: 'Diego Montes Novio, Diego Montes, Diego, Montes, Novio, dmndev, dmndev resume, devmon, devmon resume, developer, CV, Backend Developer, Full Stack Developer, Java Developer, Spring Developer, Hibernate Developer, JavaScript Developer, React Developer, Next.js Developer, Node.js Developer, Python Developer, Swift Developer, WatchOS Developer, iOS Developer, Android Developer, Flutter Developer, Mobile Developer, Web Developer, Frontend Developer, Backend Developer, Software Developer, Software Engineer, Analyst Developer, GasoAhorro',
  links: {
    github: 'https://github.com/makucg',
    linkedin: 'https://www.linkedin.com/in/diego-montes-novio-50503448/',
    sponsor: 'https://buymeacoffee.com/dmndev',
  },
  sections: {
    home: {
      id: 'home',
      title: 'Home',
      subtitle: 'Full Stack Developer',
      icon: FaHouse,
      section: HomeSection,
    },
    profile: {
      id: 'profile',
      title: 'Profile',
      subtitle: 'About me',
      icon: FaImagePortrait,
      section: ProfileCard,
    },
    experience: {
      id: 'experience',
      title: 'Experience',
      subtitle: 'My work experience',
      icon: FaLaptopCode,
      section: ExperienceSection,
    },
    studies: {
      id: 'studies',
      title: 'Studies',
      subtitle: 'My studies',
      icon: FaBookOpen,
      section: StudiesSection,
    },
    skills: {
      id: 'skills',
      title: 'Skills',
      subtitle: 'My skills',
      icon: FaCode,
      section: SkillsSection,
    },
    projects: {
      id: 'projects',
      title: 'Projects',
      subtitle: 'My projects',
      icon: FaDev,
      section: ProjectsSection,
    },
  },
  experiences: [
    {
      title: 'Analyst Developer',
      company: 'Indra',
      period: '2022 - Present',
      description: 'Project management for external vendors at Inditex:',
      details: [
        'Technical analysis, bug fixes, and code validation.',
        'Integration with other teams.',
        'Technologies: Java, Spring, Hibernate, SOAP, SWT, JavaScript, DB2.',
      ],
      duration: '2 years',
    },
    {
      title: 'Developer',
      company: 'Cuatroochenta',
      period: '2022',
      description: 'Microservices using Java 11 and Spring Boot:',
      details: [
        'RESTful APIs and architectural design contributions.',
        'Technologies: JavaScript, JQuery, Thymeleaf.',
      ],
      duration: '11 months',
    },
    {
      title: 'Analyst Developer',
      company: 'Indra',
      period: '2018 - Feb 2022',
      description: 'Project management for external vendors at Inditex:',
      details: [
        'Technical analysis, bug fixes, and code validation.',
        'Integration with other teams.',
        'Training of new team members.',
        'Technologies: Java, Spring, Hibernate, SOAP, SWT, JavaScript, DB2.',
      ],
      duration: '4 years',
    },
    {
      title: 'Developer',
      company: 'Coremain',
      period: '2009 - 2015',
      description: 'Development of Puntal project for government management:',
      details: [
        'Technical analysis, bug fixes, and code validation.',
        'Integration with other teams.',
        'Training of new team members.',
        'Training of clients.',
        'Deployment of new versions.',
        'Technologies: Java, Hibernate, Spring, Swing, Oracle, JSF, JasperReports.',
      ],
      duration: '6 years',
    },
  ],
  education: [
    {
      title: 'System Administration',
      school: 'IES Xulián Magariños',
      period: '2007 - 2009',
    },
    {
      title: '1Z0-851 Java Standard Edition 6 Programmer Certified',
      school: 'Oracle',
      period: '2010',
    },
  ],
  projects: [
    {
      title: 'GasoAhorro',
      description: 'A dynamic web application designed to help users calculate and visualize their fuel cost savings when using a fuel card. Built with Next.js for a seamless user experience, Tailwind CSS for responsive and modern design, and TypeScript to ensure a robust and maintainable codebase. Hosted on Vercel for optimal performance and scalability.',
      technologies: [
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
      ],
      url: 'https://gasoahorro-v4.vercel.app/',
      status: 'In progress',
    },
    {
      title: 'Resume',
      description: 'A sleek and interactive personal resume showcasing my skills, projects, and experience. Developed using Next.js for efficient server-side rendering, styled with Tailwind CSS for a clean and professional look, and powered by TypeScript for reliability and scalability. Deployed on Vercel to ensure fast and consistent performance.',
      technologies: [
        { name: 'Next.js', icon: NextjsIcon },
        { name: 'Tailwind CSS', icon: TailwindIcon },
        { name: 'TypeScript', icon: TypeScriptIcon },
      ],
      url: 'https://dmndev-resume.vercel.app/',
      status: 'In progress',
    },
    {
      title: 'Block Watch Screen',
      description: 'App to block the screen of the apple watch.',
      // technologies: ['Swift', 'WatchOS'],
      status: 'Not started yet',
    },
    {
      title: 'Microservices',
      description: 'Developing a modern, secure, and scalable microservices infrastructure using Spring Boot. The system integrates Spring Security for authentication and authorization, Netflix OSS for service discovery and resilience, and Kubernetes with Docker for container orchestration. Kafka powers event-driven communication, Resilience4j ensures fault tolerance, and MariaDB is used as the primary database. Deployed with AWS, this architecture is designed for high availability, scalability, and reliability, following best practices in distributed systems.',
      technologies: [
        { name: 'Java', icon: JavaIcon },
        { name: 'Spring Boot', icon: SpringBootIcon },
        { name: 'Spring Security', icon: null },
        { name: 'Spring Cloud', icon: null },
        { name: 'Netflix OSS', icon: null },
        { name: 'Kubernetes', icon: null },
        { name: 'Docker', icon: null },
        { name: 'Kafka', icon: null },
        { name: 'Resilience4j', icon: null },
        { name: 'MariaDB', icon: null },
        { name: 'AWS', icon: null },
      ],
      status: 'In progress, not deployed yet',
    },
    {
      title: 'Expense Analyzer',
      description: 'Python application to analyze expenses.',
      technologies: [{ name: 'Python', icon: PythonIcon }],
      status: 'Not started yet',
    },
  ],
};
