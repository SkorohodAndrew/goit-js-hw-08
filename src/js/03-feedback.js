const STORAGE_KEY = 'feedback-form-state';

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};
refs.form.addEventListener('submit', onFormSubmit);
refs.input.addEventListener('input', onTextareaInput);
refs.input.addEventListener('input', onTextareaInput);

populateTextarea();

function onFormSubmit(evt) {
  evt.preventDefault();

  evt.currentTarget.reset();

  console.log('відправити форму');
}

function onTextareaInput(evt) {
  const message = evt.target.value;
  localStorage.setItem(STORAGE_KEY, message);
}

function populateTextarea(evt) {
  const saveMassage = localStorage.getItem(STORAGE_KEY);

  console.log(saveMassage);
}
