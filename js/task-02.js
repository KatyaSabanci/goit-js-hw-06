const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsArray = document.querySelector('#ingredients');

const list = ingredients.map(ingredient => {
  const newList = document.createElement('li');
  newList.textContent = ingredient;
  newList.classList.add('item');
  return newList;
});

console.log(list);
ingredientsArray.append(...list);
