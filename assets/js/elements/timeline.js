const jobs = [
  {
    title : 'Head Route Setter',
    duration : 'Jul 2020 - present',
    location : 'Crux Bouldering, Melbourne, VIC',
    description : [
      `Responsible for supervising and managing a team of route setters to design high-quality 
      indoor climbing routes in a bouldering gym in Coburg North.`,
      `Further responsibilities include training new route setters, ensuring compliance 
      with industry safety standards, and designing and implementing solutions to improve 
      business operations.`
    ]
  },
  {
    title : 'Founder',
    duration : 'Jan 2018 - 2020',
    location : 'SendLAB, Melbourne, VIC',
    description : [
      `Founded a coaching service and designed personalised training programs
      for clients seeking to improve their climbing ability.`,
      `Contracted to set indoor climbing routes for the opening of Archer
      Boulders in Kalgoorlie, Western Australia.`
    ]
  },
  {
    title : 'Climbing Instructor',
    duration : `Mar 2016 - Oct 2020`, 
    location : 'Northside Boulders, Melbourne, VIC',
    description : [
      `Key responsibilities included setting indoor climbing routes, handling
      customer service and managing the gym environment.`,
      `Route setter for the 2016 and 2019 Victorian Boulder Titles.`,
      `Awarded top prize in 2016 Northside Setter’s Competition.`
    ]
  },
  {
    title : 'Trader',
    duration : 'Sep 2013 - Dec 2016',
    location : 'Self-Employed',
    description : [
      `Traded various asset classes, including equities and forex, using
      statistical analysis to identify trading opportunities.`
    ]
  },
  {
    title : 'Website Manager',
    duration : `Nov 2014 - Dec 2016`,
    location : 'Supa Dental Clinic, Melbourne, VIC',
    description : [
      `Responsible for day-to-day management and maintenance of the
      website, including updating content, editing blog posts and designing
      visual elements.`
    ]
  },
  {
    title : 'Tutor',
    duration : 'May 2010 - Jun 2014',
    location : 'University of Melbourne, Melbourne, VIC',
    description : [
      `Provided tutorials to, and marked assignments and exams for, students
      studying Calculus 1, Calculus 2 and Linear Algebra.`
    ]
  }
];

// job description list item
const createJobDescriptionList = (paragraph) => {
  const result = document.createElement('li');
  result.innerHTML = `<p>${paragraph}</p>`;
  return result;
};

// job description
const createJobDescription = ({description}) => {
  const result = document.createElement('ul');
  result.classList = 'job-description';
  description.map((para) => result.appendChild(createJobDescriptionList(para)));
  return result;
};

// job card
const createJobCard = (job) => {
  const result = document.createElement('article');
  result.classList = 'card job-card my-6';
  result.innerHTML = `
    <header class="card-title-container underline flex-row justify-space-between">
      <h3 class="card-title job-title">${job.title}</h3>
      <p class="job-duration">${job.duration}</p>
    </header>
    <p class="job-location">${job.location}</p>`;
  result.appendChild(createJobDescription(job));
  return result;
};

// job section 
const createJobSection = (job) => {
  const result = document.createElement('li');
  result.classList = 'flex-row timeline-section';
  result.innerHTML = `
    <div class="timeline-center">
      <span class="vertical-line"> </span>
      <span class="circle"></span>
      <span class="vertical-line"></span>
    </div>`;
  result.appendChild(createJobCard(job));
  return result;
};

// display job
const displayJobSection = () => {
  const container = document.querySelector('#job-container');
  const content = document.createElement('ul');
  removeAllChildren(container);

  content.classList = 'flex-row';
  jobs.map((job) => {content.appendChild(createJobSection(job))});
  container.appendChild(content);
};