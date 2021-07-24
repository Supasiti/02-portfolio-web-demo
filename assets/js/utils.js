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