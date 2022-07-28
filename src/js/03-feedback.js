import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
// const formData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', throttle(onTextareaInput, 500));
refs.textarea.addEventListener('input', throttle(onTextareaInput, 500));
// refs.form.addEventListener('input', e => {
//   formData[e.target.name] = e.target.value;
//   console.log(formData);
// });

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(STORAGE_KEY);

  const email = evt.currentTarget.elements.email.value;
  const message = evt.currentTarget.elements.message.value;
  const formData = {
    email,
    message,
  };

  console.log(formData);

  evt.currentTarget.reset();
}

function onTextareaInput() {
  const email = refs.input.value;
  const message = refs.textarea.value;
  const formData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function populateTextarea() {
  const saveMassage = localStorage.getItem(STORAGE_KEY);
  const saveAllMassage = JSON.parse(saveMassage);
  if (saveMassage) {
    refs.input.value = saveAllMassage.email;
    refs.textarea.value = saveAllMassage.message;
  }
}
