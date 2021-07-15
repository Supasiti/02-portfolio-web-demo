const portfolioData = [
  {
    title : "Cryptfolio",
    imgData : {
      source : [
        './assets/images/cryptfolio-400w.jpeg',
        './assets/images/cryptfolio-800w.jpeg'
      ],
      alt : "screenshot of Cryptfolio"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
      'Bulma'
    ],
    link : "https://lallender.github.io/Cryptfolio/",
    codeLink : "https://github.com/LAllender/Cryptfolio"
  },
  {
    title : "Weather Dashboard",
    imgData : {
      source : [
        './assets/images/weather-dashboard-400w.png',
        './assets/images/weather-dashboard-800w.png',
      ],
      alt : "screenshot of Weather Dashboard"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
    ],
    link : "https://supasiti.github.io/06-weather-dashboard/",
    codeLink : "https://github.com/Supasiti/06-weather-dashboard"
  },
  {
    title : "Code Quiz",
    imgData : {
      source : [
        './assets/images/code-quiz-400w.gif',
        './assets/images/code-quiz-800w.gif',
      ],
      alt : "screenshot of Code Quiz"
    },
    tags : [
      'Html',
      'CSS',
      'Javascript',
    ],
    link : "https://supasiti.github.io/04-code-quiz/",
    codeLink : "https://github.com/Supasiti/04-code-quiz"
  }
];

const connectCloseMenuSm = () => {
  const closeMenuEl = document.querySelector('#close-menu-sm');
  const navBarEl = document.querySelector('#main-menu');
  closeMenuEl.addEventListener('click', event => {
    navBarEl.style.width ='0px';
  });
};

const connectHamburgerSm = () => {
  const hamburgerSmEl = document.querySelector('#open-menu-sm');
  const navBarEl = document.querySelector('#main-menu');
  hamburgerSmEl.addEventListener('click', event => {
    event.preventDefault();
    navBarEl.style.width ='240px';
    connectCloseMenuSm();
  });
};



displayPortfolio(portfolioData);
connectHamburgerSm();
