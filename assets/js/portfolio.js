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
      'HTML5',
      'CSS',
      'JavaScript',
      'Bulma'
    ],
    link : "https://lallender.github.io/Cryptfolio/",
    codeLink : "https://github.com/LAllender/Cryptfolio",
    description : 'An app that allows the user to see visually the value of their cryptocurrency portfolio.'
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
      'HTML5',
      'CSS',
      'JavaScript',
    ],
    link : "https://supasiti.github.io/06-weather-dashboard/",
    codeLink : "https://github.com/Supasiti/06-weather-dashboard",
    description : 'A weather dashboard that allows users to get current and the next 5-day weather data for a city they are interested in.'
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
      'HTML5',
      'CSS',
      'JavaScript',
    ],
    link : "https://supasiti.github.io/04-code-quiz/",
    codeLink : "https://github.com/Supasiti/04-code-quiz",
    description : 'A lightweight quiz app that tests your knowledge on JavaScript.'
  }
];

// --------------------
//  for other projects

// ul to hold all the projects
const createProjectContent = () => {
  const result = document.createElement('ul');
  result.classList = 'flex-row align-stretch';
  return result;
};

// <li> element to hold each project 
const createProjectListItem = () => {
  const result = document.createElement('li');
  result.classList = 'px-2 col-12 flex-row';
  return result;
};


// display other project in a grid
const displayAllProjects = () => {
  const containerEl = document.querySelector('#project-container');
  const contentEl = createProjectContent();

  removeAllChildren(containerEl);

  portfolioData.map(project => {
    const liEl = createProjectListItem();
    liEl.appendChild(createProjectCard(project));
    contentEl.appendChild(liEl);
  });
  containerEl.appendChild(contentEl);
}



