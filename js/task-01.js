//Завдання 1
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

let categoryString = '';
totalCategories.forEach(category => {
  const categoryName = category.firstElementChild.textContent;
  const categoryElementsCount = category.lastElementChild.children.length;
  categoryString += `Category: ${categoryName}\nElements: ${categoryElementsCount}\n`;
});

console.log(categoryString);
