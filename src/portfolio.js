const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: '#',
  title: 'NI.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Nauman Ilyas',
  role: 'Software Engineer',
  description:
    "I'm a Software Engineer, Who loves to code and work with challenging designs and amazing functionalities specializing in High-Quality web development. I'm linked web development from last 2 years and worked many types of projects before and can provide you the exact thing that's you require. I looking forward to working with you on your project. I appreciate being a team player, since it enhances the development of great products, plus improving ideas & friendships. Though I can work as well as individually, being my own friend. Fully open and willing to adopt new ideas and new ways of working and doing things.",
  resume: 'https://noman.s3.amazonaws.com/Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/nauman-ilyas-495368114/',
    github: 'https://github.com/NomanIlyas',
    upwork: 'https://github.com/NomanIlyas',
    stackOverflow: 'https://github.com/NomanIlyas',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: '4-ART',
    description:
      '4art technologies is a digital artwork agency that digitalizes the artwork with highly secure way. I worked on this project as a Symofny developer and developed Custom APIS & new features and optimized and improve the existing structure/leave the group.',
    stack: ['Symfony', 'PHP', 'Javascript', 'AWS'],
    livePreview: 'https://www.4art-technologies.com',
  },
  {
    name: 'Ekomi',
    description:
      'Ekomi is a Berlin-based company that offers a review solution for both company and product reviews. I worked as Software Engineer & responsible to develop new feature and maintain existing functionality ',
    stack: ['Symfony', 'TypeScript', 'Bootstrap'],
    livePreview: 'https://www.ekomi.com',
  },
  {
    name: 'Covid Tracker',
    description:
      'The Johns Hopkins Coronavirus Resource Center (CRC) is a continuously updated source of COVID-19 data and expert guidance. I worked with team and add new feature and make more efficient previous feature',
    stack: ['Symfony', 'PHP', 'PYTHON'],
    livePreview: 'https://coronavirus.jhu.edu',
  },
  {
    name: 'Walnut Hill institution',
    description:
      'Walnut Hill Community Association (WHCA) serves the neighborhood of Walnut Hill. I worked there as a full-stack developer and add new features and developed custom plugins and theme modifications as per the requirements.',
    stack: ['WordPress', 'PHP'],
    livePreview: 'https://walnuthillca.com',
  },
  {
    name: 'Creative Repute',
    description:
      'Creative Repute, LLC is an award-winning graphic design and website development agency. I worked here as a full-stack developer and worked on 10+ projects that require pixel-perfect. There are highly professional people with creative minds working here that make it',
    stack: ['WordPress', 'PHP'],
    livePreview: 'creativerepute.com',
  },
  {
    name: 'Govesta',
    description:
      'Govesta is the Real state project in Germany, It deals with houses & you will connect to top real estate agents around the world in just a few clicks via efficient search',
    stack: ['Laravel', 'TypeScript', 'Vue JS'],
    // sourceCode: 'https://github.com/NomanIlyas/govesta',
    livePreview: 'https://govesta.co',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'PHP',
  'Symfony',
  'Laravel',
  'WordPress',
  'HTML',
  'CSS',
  'Bootstrap',
  'JavaScript',
  'TypeScript',
  'JQuery',
  'Ajax',
  'SquareSpace',
  'Amazaon Web Services (AWS)',
  'Docker',
  'Vagrant',
  'Jenkins',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'noman.ilyas.software@gmail.com',
}

export { header, about, projects, skills, contact }
