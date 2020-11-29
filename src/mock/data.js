import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Jon Jakova | Software Engineer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'Jon Jakova',
  subtitle: `I'm a software engineer`,
  cta: 'Learn more about me',
};

// ABOUT DATA
export const aboutData = {
  // img: 'profile.jpg',
  paragraphOne: ` I have a passion for programming and building software that are reliable and easily maintainable.
                  I graduated at the Canadian Institute of Technology as a Software Engineer.`,
  paragraphTwo:
    'My most proficient programming languange are Python, Javascript (ES6 / Typescript) and C# but I feel quite confortable working with Java and C++ as well.',
  paragraphThree: 'Feel free to check my resume and the projects I have worked on!',
  resume: 'https://drive.google.com/file/d/1qE6xma5g2v8rFNCdBQRN60ZO6t65mSeB/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'smartbrain-logo.png',
    title: 'Smartbrain',
    info: ` A webapp that identifies a person face in a given image.
            The app takes a URL of an image and displayes the image with the face framed.`,
    info2: '',
    url: 'https://s-smart-brain.herokuapp.com/',
    repo: 'https://github.com/JonJakova/smartbrain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'movie-chart.png',
    title: 'MovieChart',
    info: 'Webapp where you can learn about upcoming movies.',
    info2: 'The information is updated frequently and automatically.',
    url: 'https://moviechart.herokuapp.com/',
    repo: 'https://github.com/JonJakova/movie-chart', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'robofriends-logo.png',
    title: 'Robofriends',
    info: 'A simple application that generate robots card developed in React.',
    info2: '',
    url: 'https://jonjakova.github.io/robofriends/',
    repo: 'https://github.com/JonJakova/robofriends', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'rin.png',
    title: 'Rin Compiler',
    info: 'Rin is a simple compiler written in C#.',
    info2: `It support features such as mathematical and logical operations, strings, i/o, 
    conditional statements and loops.`,
    // url: '',
    repo: 'https://github.com/JonJakova/rin', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'ecomm-logo.png',
    title: 'Ecomm',
    info: 'An ecommerce webapp developed in JSF.',
    info2: 'The application is meant to be used as consumer-to-consumer store.',
    // url: '',
    repo: 'https://github.com/JonJakova/Ecomm-Online-Store', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Email me at jon.jakova@gmail.com',
  btn: `Let's talk`,
  email: 'jon.jakova@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: uuidv1(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: uuidv1(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jon-jakova-baa33b1a4/',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/JonJakova',
    },
    {
      id: uuidv1(),
      name: 'instagram',
      url: 'https://www.instagram.com/jon_jakova',
    },
    {
      id: uuidv1(),
      name: 'gitlab',
      url: 'https://gitlab.com/JonJakova',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
