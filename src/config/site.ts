import { ExperienceIcon, HomeIcon, ProfileIcon, ProjectsIcon, SkillsIcon, StudentsIcon } from '@/components/icons/icons';

export const siteConfig = {
  name: 'Resume',
  description: 'Diego Montes Novio - Resume',
  author: 'Diego Montes Novio',
  email: 'diego.montes@outlook.com',
  links: {
    github: 'https://github.com/makucg',
    linkedin: 'https://www.linkedin.com/in/diego-montes-novio-50503448/',
    sponsor: 'https://buymeacoffee.com/dmndev',
  },
  sections: {
    home: {
      title: 'Home',
      subtitle: 'Full Stack Developer',
      icon: HomeIcon,
    },
    profile: {
      title: 'Profile',
      subtitle: 'About me',
      icon: ProfileIcon,
    },
    experience: {
      title: 'Experience',
      subtitle: 'My work experience',
      icon: ExperienceIcon,
    },
    students: {
      title: 'Students',
      subtitle: 'My students',
      icon: StudentsIcon,
    },
    skills: {
      title: 'Skills',
      subtitle: 'My skills',
      icon: SkillsIcon,
    },
    projects: {
      title: 'Projects',
      subtitle: 'My projects',
      icon: ProjectsIcon,
    },
  },
};
