const refs = {
  boxContainer: document.querySelector('#boxes'),
  createElBtn: document.querySelector('button[data-create]'),
  removeLsBtn: document.querySelector('button[data-destroy]'),
  amountValue: document.querySelector('#controls input[type="number"]'),
};

let wb = 20;
let hb = 20;

const MIN_EL = 1;
const MAX_EL = 100;

const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};

const tempDiv = idx => {
  wb += 10;
  hb += 10;
  return `<div style="background-color: ${getRandomHexColor()}; width: ${wb}px; height:${hb}px ">${idx}</div>`;
};

const createBoxes = amount => {
  const arr = [];

  for (let i = 0; i < amount; i++) {
    arr.push(tempDiv(i + 1));
  }

  return arr.join('');
};

const onClickCreateEl = () => {
  const quantityEl = refs.amountValue.value;

  if (quantityEl >= MIN_EL && quantityEl <= MAX_EL) {
    refs.boxContainer.innerHTML = createBoxes(quantityEl);
    refs.amountValue.value = '';
    wb = 20;
    hb = 20;
  } else {
    console.log('Value is incorrect, it should be from 1 to 100');
  }
};

const onClickRemoveList = () => {
  wb = 20;
  hb = 20;
  refs.boxContainer.innerHTML = '';
};

refs.createElBtn.addEventListener('click', onClickCreateEl);

refs.removeLsBtn.addEventListener('click', onClickRemoveList);
