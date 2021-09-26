export const projects = [{
  id: 1,
  name: "React Joke Bot",
  tags: [
    {
      technology: 'React',
      icon: '<i class="fab fa-react"></i>'
    },
    {
      technology: 'Joke API',
      icon: '<i class="fas fa-robot"></i>'
    },
  ],
  date: new Date('09/13/2021'),
  description: {
    short: 'In need of a laugh? This chat bot provides you with an endless stream of jokes!',
    long: 'When applying for a job I needed to show off my React skills, so I created this chat bot project. I wanted to simplify the code by implementing multiple components, make it look the part with fluid animations and add some complexity by consuming an api. This bot comes in handy whenever I need to impress some friends or colleagues. 😁'
  },
  repo: 'https://github.com/rensvis/react-joke-bot',
  demoFolder: 'react-joke-bot',
  video: {
    lowRes: 'react-joke-bot.mp4',
    highRes: ''
  },
},
{
  id: 2,
  name: "Rensvis.nl",
  tags: [
    {
      technology: 'Wordpress',
      icon: '<i class="fab fa-wordpress-simple"></i>'
    }
  ],
  date: new Date('09/13/2021'),
  description: {
    short: 'A portfolio site to showcase the client website projects I have done.',
    long: 'In my spare time I help businesses grow their online presence by building awesome websites. Rensvis.nl is a website I built to show off the projects I\'ve done and where potential clients can reach out. I mostly use Wordpress for building the sites. I always build a completely custome theme, which gives me the flexibility to design and create anything the client wants. It also ensures great performance and optimal SEO.'
  },
  repo: '',
  liveUrl: 'https://rensvis.nl',
  demoFolder: '',
  video: {
    lowRes: 'rensvis-nl.mp4',
    highRes: ''
  }
},
// {
//   id: 3,
//   name: "Vue Distance Calculator",
//   tags: [
//     {
//       technology: 'Vue',
//       icon: '<i class="fab fa-vuejs"></i>'
//     },
//     {
//       technology: 'Google Maps API',
//       icon: '<i class="fas fa-map-marked-alt"></i>'
//     }
//   ],
//   date: new Date('09/13/2021'),
//   description: {
//     short: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique...',
//     long: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Adipiscing elit pellentesque habitant morbi tristique.'
//   },
//   repo: 'https://github.com/rensvis/react-joke-bot',
//   demoFolder: 'react-joke-bot',
//   video: {
//     lowRes: '',
//     highRes: ''
//   }
// }
];


export const socials = [
{
  id: 1,
  platform: "Github",
  link: "https://github.com/rensvis",
  icon: "<i class='fab fa-github'></i>"
},
{
  id: 2,
  platform: "LinkedIn",
  link: "https://www.linkedin.com/in/rens-vis-9218a9174/",
  icon: "<i class='fab fa-linkedin'></i>"
},
{
  id: 3,
  platform: "Instagram",
  link: "https://www.instagram.com/joshuarensvis",
  icon: "<i class='fab fa-instagram'></i>"
}
];

export const themes = [
  {
    id: 1,
    name: 'light'
  },
  {
    id: 2,
    name: 'developer'
  },
  {
    id: 3,
    name: 'coffee'
  },
  {
    id: 4,
    name: 'designer'
  },
  {
    id: 5,
    name: 'hacker'
  }
  ];