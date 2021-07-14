
//  remove all elements in the list
const removeAllElements = (els) => {
  if (els.length > 0){
    els.forEach(el => el.remove());
  };
}

// remove all children of an element
const removeAllChildren = (containerEl) => {
  const childEls = [...containerEl.children];
  removeAllElements(childEls);
}

// create container for the first project
const createFirstProjectContentDiv = () => {
  const result = document.createElement('div');
  result.classList = 'px-2';
  return result;
};

// display first project on screen
const displayFirstProject = (projectData) => {
  const containerEl = document.querySelector('#first-project-container');
  const contentEl = createFirstProjectContentDiv();
  const cardEl = createCard(projectData);

  removeAllChildren(containerEl);

  contentEl.appendChild(cardEl);
  containerEl.appendChild(contentEl);
}

// --------------------
//  for other projects

// ul to hold all the projects
const createOtherProjectContentUL = () => {
  const result = document.createElement('ul');
  result.classList = 'flex-row align-stretch';
  return result;
};

// <li> element to hold each project 
const createListEl = () => {
  const result = document.createElement('li');
  result.classList = 'px-2 col-12 col-lg-6 flex-row';
  return result;
};


// display other project in a grid
const displayOtherProject = (projects) => {
  const containerEl = document.querySelector('#other-project-container');
  const contentEl = createOtherProjectContentUL();

  removeAllChildren(containerEl);

  projects.map(project => {
    const liEl = createListEl();
    const cardEl = createCard(project);
    liEl.appendChild(cardEl);
    contentEl.appendChild(liEl);
  });
  containerEl.appendChild(contentEl);
}


//---------------------
// Display portfolio

const displayPortfolio = (portfolioData) => {
  displayFirstProject(portfolioData[0]);
  displayOtherProject(portfolioData.slice(1));
};