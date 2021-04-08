import { EmploymentType } from 'src/interfaces';
export const data = {
  bio: {
    name: 'Ben Halverson',
    tagline: 'Full-Stack Developer',
    email: 'website@benhalverson.com',
    website: 'https://benhalverson.com',
    linkedin: 'https://linkedin.com/in/benhalverson',
    github: 'https://github.com/benhalverson',
    twitter: 'https://twitter.com/ben_halverson'
  },
  skills: ['HTML', 'SCSS', 'Typescript', 'Javascript', 'Node.js'],
  positions: [
    {
      id: '1',
      title: 'Lead UI Developer',
      company: 'Accenture for Google',
      startDate: '2019-03',
      endDate: null,
      employmentType: EmploymentType.FULL_TIME,
      location: 'San Jose, CA',
      achievements: [
        'Lead UI Developer for a sales and marketing tool, built from scratch using Angular with Typescript',
        'Internal finance tool (abandoned and unclaimed property) for Google financial analysts built using AngularDart',
        'Migrated UI from GWT UI to AngularDart and Material Design for IAM (Internal Access Mangement) web app'
      ],
      technologyUsed: [
        'Angular',
        'Typescript',
        'SCSS',
        'HTML',
        'ProtoBufs',
        'gRPC',
        'Dart',
        'Angular Dart'
      ]
    },
    {
      id: '2',
      title: 'Software Engineer',
      company: 'Amazon Lab126',
      startDate: '2018-10',
      endDate: '2018-12',
      employmentType: EmploymentType.CONTACTOR,
      location: 'Sunnyvale, CA',
      achievements: [
        'Developed an internal tool to help other Amazonians track lessons learned for new hardware product development',
        'Migrated from Node v4 to Node v6',
        'Added unit tests for codebase'
      ],
      technologyUsed: [
        'Angular',
        'Node.js',
        'Express.js',
        'HTML',
        'SCSS',
        'AWS S3'
      ]
    },
    {
      id: '3',
      title: 'Web Developer',
      company: 'Viscira',
      startDate: '2017-01',
      endDate: '2018-05',
      employmentType: EmploymentType.FULL_TIME,
      location: 'Sunnyvale, CA',
      achievements: ['']
    },
    {
      id: '4',
      title: 'Web Developer',
      company: 'E*Trade Financial',
      startDate: '2016-01',
      endDate: '2016-09',
      employmentType: EmploymentType.FREELANCE,
      location: 'Menlo Park, CA',
      achievements: ['thing 1 ', 'thing 2', 'thing 3']
    },
    {
      id: '5',
      title: 'Web Developer',
      company: 'Coding House',
      startDate: '2013-10',
      endDate: '2016-08',
      employmentType: EmploymentType.CONTACTOR,
      location: 'Fremont, CA',
      achievements: ['thing 1 ', 'thing 2', 'thing 3']
    }
  ]
};
