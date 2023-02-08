function handleFocus(event) {
  console.log('focus event fired');
  console.log(event.target.name);
}

function handleBlur(event) {
  console.log('blur event fired');
  console.log(event.target.name);
}

function handleInput(event) {
  console.log(event.target.name, event.target.value);
}

var inputUserName = document.querySelector('#user-name');
var inputUserEmail = document.querySelector('#user-email');
var textArea = document.querySelector('#user-message');

inputUserName.addEventListener('focus', handleFocus);
inputUserName.addEventListener('blur', handleBlur);
inputUserName.addEventListener('input', handleInput);

inputUserEmail.addEventListener('focus', handleFocus);
inputUserEmail.addEventListener('blur', handleBlur);
inputUserEmail.addEventListener('input', handleInput);

textArea.addEventListener('focus', handleFocus);
textArea.addEventListener('blur', handleBlur);
textArea.addEventListener('input', handleInput);

// var openModalButton = document.querySelector('.open-modal-button');
// var noButton = document.querySelector('.no-button');
// var displayOff = document.querySelector('.display-off');

// openModalButton.addEventListener('click', openModalFunction);
// function openModalFunction(e) {
//   displayOff.className = 'container-2';
// }

// noButton.addEventListener('click', closeModalFunction);
// function closeModalFunction(e) {
//   displayOff.className = 'container-2 display-off';
// }
