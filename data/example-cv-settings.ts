import { Cv } from '@/types/cv_builder_types';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Test Job',
  name: 'Ameer',
  lastName: 'Hamza',
  email: 'test@example.com',
  location: 'location 1,Country 1',
  phoneNumber: '+92 332 123456',
  aboutme:
    "My name is AmeerHamza, for testing purpose and volume data I'm going to copy paste a specific strig again and again. Here we go, This is test about me. This is test about me. This is test about me. This is test about me. This is test about me.",
  jobSkills: ['PHP', 'Node', 'Python', 'Javascript'],
  softSkills: ['Leadership', 'Team building', 'motivational Speaker'],
  languages: [
    { lang: 'English', level: '80%' },
    { lang: 'Urdu', level: '100%' },
  ],
  linkedin: 'https://www.linkedin.com/test-user',
  twitter: 'https://www.twitter.com/test-user',
  github: 'https://www.github.com/test-user',
  website: 'https://test.com',
  education: [
    {
      title: 'bachelor Education',
      location: 'Test University, City, Country',
      from: new Date(2015, 9, 1),
      to: new Date(2019, 4, 1),
      current: false,
      summary: 'Bachelor education',
    },
  ],
  work: [
    {
      title: 'Full stack developer',
      location: 'locatio of company',
      from: new Date(2019, 1, 1),
      to: new Date(2021, 1, 1),
      current: true,
      summary: 'This is a test description of test job',
    },
  ],
  projects: [
    {
      title: 'Project 1',
      location: 'city, country',
      from: new Date(2019, 1, 1),
      to: new Date(2020, 1, 1),
      current: true,
      summary: 'This is test description of project',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#5B21B6',
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  work: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  projects: [
    {
      title: '',
      location: '',
      from: new Date(),
      to: new Date(),
      current: true,
      summary: '',
    },
  ],
  displayEducation: true,
  displayProjects: true,
  activeColor: '#5B21B6',
};
