const refs = {
  inputRef: document.querySelector('#name-input'),
  messageRef: document.querySelector('#name-output'),
};

const onInputHandler = () => {
  const message = refs.inputRef.value.trim();
  if (message) {
    refs.messageRef.textContent = message;
  } else {
    refs.messageRef.textContent = 'Anonymous';
  }
};

refs.inputRef.addEventListener('input', onInputHandler);
