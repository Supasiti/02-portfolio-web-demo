
//  card container
const createCardContainer = () => {
  const result = document.createElement('div');
  result.classList = 'card';
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

//  card body
const createCardBody = (imgData) => {
  const result = document.createElement('body');
  const imgEl = document.createElement('img');
  imgEl.classList = 'card-img';
  imgEl.srcset = parseImgSource(imgData.source);
  imgEl.alt = imgData.alt;

  result.appendChild(imgEl);
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
  const result = document.createElement('footer');
  const cardTagContainerEl = createCardTagContainer(tags);
  result.appendChild(cardTagContainerEl);
  return result;
};




// composition

const createCard = (cardData) => {
  const result = createCardContainer();
  const articleEl = document.createElement('article');
  const titleEl = createCardTitle(cardData.title);
  const bodyEl  = createCardBody(cardData.imgData);
  const footerEl = createCardFooter(cardData.tags);

  articleEl.appendChild(titleEl);
  articleEl.appendChild(bodyEl);
  articleEl.appendChild(footerEl);
  
  result.appendChild(articleEl);
  return result;
};