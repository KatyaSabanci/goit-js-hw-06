const categoryNumber = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoryNumber.length}`);

categoryNumber.forEach(item => {
  const title = item.firstElementChild;
  const listNumber = item.lastElementChild.children;

  console.log(`Category: ${title.textContent} Elements: ${listNumber.length}`);
});
