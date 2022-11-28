// import { throttle } from 'lodash.throttle';
const throttle = require('lodash.throttle');

const refs = {
    form: document.querySelector('.feedback-form'),
};

const LOCALSTORAGE_KEY = 'feedback-form-state';

refs.form.addEventListener('input',throttle(onInputForm,500));
refs.form.addEventListener('submint', onSubmint);
window.addEventListener('load', updateOutputOnload);

function onInputForm(e) {
    e.preventDefault();
    const email = refs.form.elements.email.value;
    const message = refs.form.elements.message.value;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify({ email, message }));
}

function updateOutputOnload(event) {
  event.preventDefault();
  const OutputText = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ) || {
    email: '',
    message: '',
  };
  const { email, message } = OutputText;
  refs.form.elements.email.value = email;
  refs.form.elements.message.value = message;
}
function onSubmint(e) {
    e.preventDefault();
    const { elements: { email, message } } = e.currentTarget;
    console.log({ email: email.value, message: message.value });
    localStorage.removeItem(LOCALSTORAGE_KEY);
    refs.form.reset();
}


