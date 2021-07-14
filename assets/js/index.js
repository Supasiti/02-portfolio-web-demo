

const cardData = {
  title : "Cryptfolio",
  imgData : {
    source : [
      './assets/images/search-engine-optimization-800w.jpeg',
      './assets/images/search-engine-optimization-400w.jpeg'
    ],
    alt : "screenshot of Cryptfolio"
  },
  tags : [
    'Html',
    'CSS',
    'Javascript',
    'Bulma'
  ]
};

const removeAllElements = (els) => {
  if (els.length > 0){
    els.forEach(el => el.remove());
  };
}

const removeAllChildren = (containerEl) => {
  const childEls = [...containerEl.children];
  removeAllElements(childEls);
}

const createFirstProjectContentDiv = () => {
  const result = document.createElement('div');
  result.classList = 'px-2';
  return result;
};

const displayFirstProject = (cardData) => {
  const firstProjectContainerEl = document.querySelector('#first-project-container');
  const firstProjectContentDiv = createFirstProjectContentDiv();
  const cardEl = createCard(cardData);

  removeAllChildren(firstProjectContainerEl);

  firstProjectContentDiv.appendChild(cardEl);
  firstProjectContainerEl.appendChild(firstProjectContentDiv);
}


displayFirstProject(cardData);

