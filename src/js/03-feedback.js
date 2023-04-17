import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const feedbackFormInput = document.querySelector('.feedback-form input');
const feedbackFormText = document.querySelector('.feedback-form textarea');
const boxStorage = 'feedback-form-state';

feedbackForm.addEventListener('submit', onSubmitBut);
feedbackForm.addEventListener('input', throttle(onInputArea, 500));

function onSubmitBut(event) {
  event.preventDefault();
  if (feedbackFormInput.value === '' || feedbackFormText.value === '') {
    alert('Заповніть будь ласка всі поля');
    return;
  }
  console.log({
    email: feedbackFormInput.value,
    message: feedbackFormText.value,
  });
  event.currentTarget.reset();
  localStorage.removeItem(boxStorage);
}

function onInputArea() {
  const data = {
    email: feedbackFormInput.value,
    message: feedbackFormText.value,
  };
  localStorage.setItem(boxStorage, JSON.stringify(data));
}

fillForm();
function fillForm() {
  const textSave = JSON.parse(localStorage.getItem(boxStorage));
  console.log(textSave);

  if (textSave) {
    feedbackFormInput.value = textSave.email;
    feedbackFormText.value = textSave.message;
  }
}
