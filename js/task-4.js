const refs = {
  form: document.querySelector('.login-form'),
};

const onSubmitForm = e => {
  e.preventDefault();
  const userData = {
    [e.target.elements.email.name]: e.target.elements.email.value,
    [e.target.elements.password.name]: e.target.elements.password.value,
  };

  const dataValues = Object.values(userData);

  for (const value of dataValues) {
    if (!value.length) {
      alert('All form fields must be filled in');
      return;
    }
  }
  console.log(userData);
  refs.form.reset();
};

refs.form.addEventListener('submit', onSubmitForm);
