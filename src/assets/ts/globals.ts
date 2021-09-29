export let projects = [
  {
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
      long: '<p>When applying for a job I needed to show off my React skills, so I created this chat bot project. I wanted to simplify the code by implementing multiple components, make it look the part with fluid animations and add some complexity by consuming an api. This bot comes in handy whenever I need to impress some friends or colleagues. 😁</p>'
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
      long: '<p>In my spare time I help businesses grow their online presence by building awesome websites. Rensvis.nl is a website I built to show off the projects I\'ve done and where potential clients can reach out. I mostly use Wordpress for building the sites. I always build a completely custome theme, which gives me the flexibility to design and create anything the client wants. It also ensures great performance and optimal SEO.</p>'
    },
    repo: '',
    liveUrl: 'https://rensvis.nl',
    demoFolder: '',
    video: {
      lowRes: 'rensvis-nl.mp4',
      highRes: ''
    }
  },
  {
    id: 3,
    name: "Vue Tic Tac Toe Bot",
    tags: [
      {
        technology: 'Vue',
        icon: '<i class="fab fa-vuejs"></i>'
      },
      {
        technology: 'MiniMax Algorithm',
        icon: '<i class="fas fa-calculator"></i>'
      }
    ],
    date: new Date('9/28/2021'),
    description: {
      short: 'Take a chance at beating this Vue Tic Tac Toe bot!',
      long: '<p>I created this project in order to pick up Vue quickly. I had built a Tic Tac Toe game before in plain JavaScript so I was able to reuse a bit of the algorithm/AI logic. This allowed me to focus on getting to know the Vue framework.</p><p>Don\'t waste too much time trying to beat the \'impossible\' level. The name says it all. 😉</p>'
    },
    repo: 'https://github.com/rensvis/vue-ttt-ai',
    demoFolder: 'vue-ttt-ai',
    video: {
      lowRes: 'vue-ttt-ai-540-compressed.mp4',
      highRes: ''
    }
  }
].sort(function (a, b) {
  return b.id - a.id;
});


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