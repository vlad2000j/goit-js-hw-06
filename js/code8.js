const form = document.querySelector('.login-form');

  form.addEventListener('submit', (event) => {
    event.preventDefault(); // запобігає перезавантаженню сторінки при відправці форми

    const formData = new FormData(form); // отримуємо дані з форми
    const formValues = Object.fromEntries(formData.entries()); // конвертуємо дані у формат об'єкту
    console.log(formValues); // виводимо об'єкт з даними в консоль

    if (!formValues.email || !formValues.password) {
      alert('Всі поля повинні бути заповнені!'); // якщо є незаповнені поля, виводимо повідомлення
      return; // перериваємо обробку відправки форми
    }

    form.reset(); // очищуємо поля форми
  });