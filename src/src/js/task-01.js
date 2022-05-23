const categoriesEl = document.querySelectorAll('li.item');

console.log("Number of category:", categoriesEl.length);
categoriesEl.forEach(category => {
    console.log('Category: ', category.firstElementChild.textContent);
    console.log('Category: ', category.lastElementChild.children.length);
});
