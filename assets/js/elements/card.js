
// handle go to a new window
const handleGotoLink = (event, link) => {
  event.preventDefault();
  console.log(event.target);
  window.open(link);
};


//  card container
const createCardContainer = () => {
  const result = document.createElement('div');
  result.classList = 'card';
  return result;
};

// card aricle
const createCardArticle = (link) => {
  const result = document.createElement('article');
  result.dataset.link = link;
  result.addEventListener('click', event => handleGotoLink(event, link));
  return result;
};


//  card title
const createCardTitle = (title) => {
  const result = document.createElement('header');
  const titleEl = document.createElement('h3');
  titleEl.classList = 'card-title underline';
  titleEl.textContent = title;
  result.appendChild(titleEl);
  result.classList = 'card-title-container'
  return result;
};

// card overlay
const createCardDarkOverlay = () => {
  const result = document.createElement('div');
  result.classList = 'card-img-overlay';
  return result;
};

const parseImgSource = (imgSource) => {
  const getWidth = source => {
    const strings = source.split('-');
    return strings[strings.length -1].split('.')[0];
  };

  const imgSrcSetWithWidth = imgSource.map(source => [source, getWidth(source)]);
  const imgSrcSetStrings = imgSrcSetWithWidth.map(item => item.join(' '));
  return imgSrcSetStrings.join(', ');
};

// card image
const createCardImgEl = (imgData) => {
  const result = document.createElement('img');
  result.classList = 'card-img';
  result.srcset = parseImgSource(imgData.source);
  result.alt = imgData.alt;
  result.loop = -1;
  return result;
};

// card tag
const createCardTag = (tag) => {
  const result = document.createElement('li');
  const pEl = document.createElement('p');
  pEl.textContent = tag;
  result.classList = 'card-tag';
  result.appendChild(pEl);
  return result;
};


const createCardTagContainer = (tags) => {
  const result = document.createElement('ul');
  result.classList = 'card-tags flex-row justify-flex-start';
  tags.map(tag => result.appendChild(createCardTag(tag)));
  return result;
}

// card footer
const createCardFooter = (tags) => {
  const result = document.createElement('div');
  const cardTagContainerEl = createCardTagContainer(tags);
  result.appendChild(cardTagContainerEl);
  return result;
};


//  card body
const createCardBody = (cardData) => {
  const result = document.createElement('body');
  const imgEl = createCardImgEl(cardData.imgData);
  const footerEl = createCardFooter(cardData.tags);
  const overlayEl = createCardDarkOverlay();

  result.appendChild(imgEl);
  result.appendChild(footerEl);
  result.appendChild(overlayEl);
  return result;
};

// card code
const createCardCode = (codeLink) => {
  const result = document.createElement('div');
  const textEl = document.createElement('p');
  textEl.innerHTML = '<span class="fab fa-github"></span> Code';
  result.classList = 'card-code';
  result.dataset.link = codeLink;
  result.addEventListener('click', event => handleGotoLink(event, codeLink));
  result.appendChild(textEl);
  return result;
};

// create final card
const createCard = (projectData) => {
  const result = createCardContainer();
  const articleEl = createCardArticle(projectData.link)
  const titleEl = createCardTitle(projectData.title);
  const bodyEl  = createCardBody(projectData);
  const codeEl  = createCardCode(projectData.codeLink);

  articleEl.appendChild(titleEl);
  articleEl.appendChild(bodyEl);

  result.appendChild(articleEl);
  result.appendChild(codeEl);

  return result;
};

