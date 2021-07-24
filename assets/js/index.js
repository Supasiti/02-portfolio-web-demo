
// open menu on mobile view port
const connectOpenMenuOnMobile = () => {
  document.addEventListener('click', event => {
    const navBarEl = document.querySelector('#main-menu');
    const divEl = event.target.closest('div');
    if (divEl && divEl.id === 'open-menu-sm'){
      navBarEl.style.width ='240px';
      navBarEl.style.zIndex = 1020;
      document.addEventListener('click', closeMenuOnMobile)
    };
  });
};

// conditions when mouse is clicked to close the menu
const isMouseClickedToClose = event => {
  const el = event.target;
  if (el.id === 'main-menu') {
    return false;
  }
  if (el.closest('li') && el.closest('li').classList.contains('bg-pink')){ 
    return false;
  }
  return true;
}; 

// close menu on mobile view port
const closeMenuOnMobile = event => {
  if (window.innerWidth < 768){ // mobile window
    const navBarEl = document.querySelector('#main-menu');

    if (isMouseClickedToClose(event)){
      navBarEl.style.width ='0px';
      document.removeEventListener('click', closeMenuOnMobile)
      setTimeout(()=> {navBarEl.style.zIndex = 10}, 500); 
    };
  };
};

// open menu on tablet
const openMenuOnTablet = (openEl) => {
  const headerEl = document.querySelector('header.page-header');
  const mainEl = document.querySelector('main');

  headerEl.style.left ='240px';
  mainEl.style.marginLeft = '240px';
  openEl.style.zIndex = 22;
};

// close menu on tablet
const closeMenuOnTablet = event => {
  if (window.innerWidth >= 768){ // tablet window
    if (isMouseClickedToClose(event)){
      const headerEl = document.querySelector('header.page-header');
      const mainEl = document.querySelector('main');
      const openEl = document.querySelector('#open-menu-lg');

      headerEl.style.left ='56px';
      mainEl.style.marginLeft = '56px';
      openEl.style.zIndex = 24;
      document.removeEventListener('click', closeMenuOnTablet) 
    };
  };
};

// open menu on tablet view port
const connectOpenMenuOnTablet = () => {
  document.addEventListener('click', event => {
    
    const divEl = event.target.closest('div');
    if (divEl && divEl.id === 'open-menu-lg'){
      openMenuOnTablet(divEl)
      document.addEventListener('click', closeMenuOnTablet)
    };
  });
};


displayAllProjects();
connectOpenMenuOnMobile();
connectOpenMenuOnTablet();

