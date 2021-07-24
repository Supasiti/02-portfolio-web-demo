
// handle go to a new window
const handleGotoLink = (event, link) => {
  event.preventDefault();
  event.stopPropagation();
  window.open(link);
};

//-----------------------------------------
//  card container 
const createProjectCardContainer = ({link}) => {
  const result = document.createElement('div');
  result.classList = 'card project-card flex-row';
  result.dataset.link = link;
  result.addEventListener('click', event => handleGotoLink(event, link));
  return result;
};

//-----------------------------------------
//  parsing image source from image path 
const parseImgSource = (imgSource) => {
  const getWidth = source => {
    const strings = source.split('-');
    return strings[strings.length -1].split('.')[0];
  };

  const imgSrcSetWithWidth = imgSource.map(source => [source, getWidth(source)]);
  const imgSrcSetStrings = imgSrcSetWithWidth.map(item => item.join(' '));
  return imgSrcSetStrings.join(', ');
};

// project image 
const createProjectImgEl = ({imgData}) => {
  const result = document.createElement('img');
  result.classList = 'card-img';
  result.srcset = parseImgSource(imgData.source);
  result.alt = imgData.alt;
  result.loop = -1;
  return result;
};

// project tag
const createProjectTag = (tag) => {
  const result = document.createElement('li');
  result.classList = 'card-tag';
  result.innerHTML = `<p>${tag}</p>`
  return result;
};

// tag container
const createTagContainer = ({tags}) => {
  const result = document.createElement('div');
  const ulEl = document.createElement('ul');
  result.classList = 'card-tags';
  ulEl.classList = 'flex-row justify-flex-start';
  tags.map(tag => ulEl.appendChild(createProjectTag(tag)));
  result.appendChild(ulEl);
  return result;
}

// image overlay 
const createImageDarkOverlay = () => {
  const result = document.createElement('div');
  result.classList = 'card-img-overlay';
  return result;
};

// image container 
const createImageContainer = projectData => {
  const result = document.createElement('div');
  result.classList = 'card-img-container col-12 col-md-6';
  result.appendChild(createProjectImgEl(projectData));
  result.appendChild(createTagContainer(projectData));
  result.appendChild(createImageDarkOverlay());
  return result;
};

//-----------------------------------------
// project article
const createProjectArticle = (link) => {
  const result = document.createElement('article');
  result.classList = 'col-12 col-md-6';
  return result;
};

//  project title
const createProjectTitle = ({title}) => {
  const result = document.createElement('header');
  result.classList = 'card-title-container'
  result.innerHTML = `<h3 class="card-title underline">${title}</h3>`
  return result;
};


// project description
const createProjectDescription = ({description}) => {
  const result = document.createElement('div');
  result.innerHTML = `<p>${description}</p>`;
  return result;
};

// project code
const createProjectCode = ({codeLink}) => {
  const result = document.createElement('div');
  const textEl = document.createElement('p');
  textEl.innerHTML = '<span class="fab fa-github"></span> Code';
  result.classList = 'card-code';
  result.dataset.link = codeLink;
  result.addEventListener('click', event => handleGotoLink(event, codeLink));
  result.appendChild(textEl);
  return result;
};

// project article container
const createProjectArticleContainer = projectData => {
  const result = createProjectArticle();
  result.appendChild(createProjectTitle(projectData));
  result.appendChild(createProjectDescription(projectData));
  result.appendChild(createProjectCode(projectData));
  return result;
};

//-----------------------------------------
// create final card
const createProjectCard = (projectData) => {
  const result = createProjectCardContainer(projectData);
  result.appendChild(createImageContainer(projectData));
  result.appendChild(createProjectArticleContainer(projectData));

  return result;
};

