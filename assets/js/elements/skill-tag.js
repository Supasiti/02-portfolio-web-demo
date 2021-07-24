const skills = [
  'Git',
  'Agile Development',
  'TDD'
]

const createSkillTag = (text) => {
  const result = document.createElement('li');
  result.classList = 'card-code mx-3';
  result.innerHTML = `<p>${text}</p>`;
  return  result;
};

const displaySkillTags = () => {
  const container = document.querySelector('#skill-tag-container');
  removeAllChildren(container);

  skills.map((skill) => {container.appendChild(createSkillTag(skill))});
};
