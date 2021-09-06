const badgeData = [
  {
    icon : `<i class="fab fa-python fa-3x"></i>`,
    title : 'Python',
    text : 'Numpy, Opencv, TensorFlow, Keras'
  },
  {
    icon : `<i class="fab fa-js-square fa-3x"></i>`,
    title : 'JavaScript',
    text : 'HTML5, CSS, Node.js, Jest, Express, Sequelize(MySQL)'
  },
  {
    icon : `<div class="badge-square flex-row align-center justify-center"><p>C#</p></div>`,
    title : 'C#',
    text : '.NET Core, Xamarin Forms'
  },
];

const createBadge = (badgeData) => {
  const result = document.createElement('div');
  result.classList = 'flex-row col-12 col-md-4 px-3';
  result.innerHTML = `<div class="badge">
    <header class="badge-icon">
      ${badgeData.icon}
    </header>
    <h3 class="badge-title">${badgeData.title}</h3>
    <p>${badgeData.text}</p>
  </div>
  `
  return result;
};

const displayAllBadges = () => {
  const container = document.querySelector('#badge-container');
  removeAllChildren(container);

  badgeData.map((badge) => {container.appendChild(createBadge(badge))});
};