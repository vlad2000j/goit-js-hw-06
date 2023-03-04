// Отримуємо посилання на елементи DOM
const counterEl = document.getElementById('counter');
console.log(counterEl);
const valueEl = counterEl.querySelector('#value');
console.log(valueEl);
const decrementBtn = counterEl.querySelector('[data-action="decrement"]');
console.log(decrementBtn);
const incrementBtn = counterEl.querySelector('[data-action="increment"]');
console.log(incrementBtn);

// Ініціалізуємо лічильник
let counterValue = 0;

// Додаємо слухачів подій на кнопки
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  valueEl.textContent = counterValue;
});