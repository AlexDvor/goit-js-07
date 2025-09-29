const refs = {
  body: document.querySelector('body'),
  msColor: document.querySelector('.color'),
  btn: document.querySelector('.change-color'),
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const onChangeColor = () => {
  const currentColor = getRandomHexColor();
  refs.body.style.backgroundColor = currentColor;
  refs.msColor.textContent = currentColor;
};

refs.btn.addEventListener('click', onChangeColor);
