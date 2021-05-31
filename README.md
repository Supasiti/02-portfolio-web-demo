# 02-portfolio-web-demo

## Task

I was tasked to create a web application to showcase my portfolio of work. It needs to include
- the developer's name, recent photo and their biograpy;
- their work; and
- how to contact them.
Behaviorally, it needs to have easy accessible and functional navigational links that scroll
to all of these sections. It needs to be responsive to changing viewport sizes. 

In particular, I was provided with the following user story and acceptance criteria.

## User Story

```
AS AN employer
I WANT to view a potential employee's deployed portfolio of work samples
SO THAT I can review samples of their work and assess whether they're a good candidate for an open position
```

## Acceptance Criteria

Here are the critical requirements necessary to develop a portfolio that satisfies a typical hiring manager’s needs:

```
GIVEN I need to sample a potential employee's previous work
WHEN I load their portfolio
THEN I am presented with the developer's name, a recent photo or avatar, and links to sections about them, their work, and how to contact them
WHEN I click one of the links in the navigation
THEN the UI scrolls to the corresponding section
WHEN I click on the link to the section about their work
THEN the UI scrolls to a section with titled images of the developer's applications
WHEN I am presented with the developer's first application
THEN that application's image should be larger in size than the others
WHEN I click on the images of the applications
THEN I am taken to that deployed application
WHEN I resize the page or view the site on various screens and devices
THEN I am presented with a responsive layout that adapts to my viewport
```

### Preview

The end product should resemble the mock-up provided below:

![Portfolio demo](./assets/demo/screenshot.png)

> **Note:** This layout will change as the resolution drops below 992px and again at 768px.  


## Installation
[(Back to top)](#task)

To use this project, first clone the repo on your device using the commands below:

    git init
    git clone https://github.com/Supasiti/02-portfolio-web-demo.git


## Usage
[(Back to top)](#task)

The final webpage can be accessed through the following [link](https://supasiti.github.io/02-portfolio-web-demo/).


## Design Consideration
[(Back to top)](#task)




### Implementation

To meet all the acceptance criteria above, the following refactoring and design principles were considered:
- Appropriate semantic HTML elements were used to create more clarity in the code;
- `style.css` was organised to follow semanture structure;
- Comments were added, where appropriate to improve readability;
- Duplicate styling were consolidated in order to reduce a future risk of editing errors;
- Broken links were fixed;
- An appropriate title was added;
- The navigation bar was fixed to the top the page to improve the ease of navigation;
- Accessible alt attributes were added to all images to improve user accessibility.
