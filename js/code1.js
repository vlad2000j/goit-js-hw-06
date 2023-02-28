//Завдання 1
const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${totalCategories.length}`);

let categoryString = '';
totalCategories.forEach(category => {
  const categoryName = category.children[0].textContent;
  const categoryElementsCount = category.children[1].children.length;
  categoryString += `Category: ${categoryName}\nElements: ${categoryElementsCount}\n`;
});

console.log(categoryString);
