const refs = {
  categoriesList: document.querySelector('#categories'),
  items: document.querySelectorAll('#categories .item'),
};

console.log(`Number of categories: ${refs.categoriesList.children.length}`);

refs.items.forEach(item => {
  const title = item.querySelector('h2').textContent.trim();
  const elementsCount = item.querySelector('ul').children.length;

  console.log(`Category: ${title}`);
  console.log(`Elements: ${elementsCount}`);
});
