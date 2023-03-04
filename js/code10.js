const createBtn = document.querySelector('[data-create]');
  const destroyBtn = document.querySelector('[data-destroy]');
  const boxesDiv = document.querySelector('#boxes');

  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }

  function createBoxes(amount) {
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const div = document.createElement('div');
      div.style.width = size + 'px';
      div.style.height = size + 'px';
      div.style.backgroundColor = getRandomHexColor();
      boxesDiv.appendChild(div);
      size += 10;
    }
  }

  function destroyBoxes() {
    boxesDiv.innerHTML = '';
  }

  createBtn.addEventListener('click', () => {
    const amount = Number(document.querySelector('input').value);
    createBoxes(amount);
  });

  destroyBtn.addEventListener('click', () => {
    destroyBoxes();
  });