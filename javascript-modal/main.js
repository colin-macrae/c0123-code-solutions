// var timesClicked = 2;
// var $button = document.querySelector('.grey-button');
// var background = document.querySelector('.black-background');

// $button.addEventListener('click', colorsChanger);

// function colorsChanger(e) {
//   // console.log('clicked');
//   timesClicked += 1;
//   if (timesClicked % 2 === 0) {
//     $button.className = 'grey-button';
//     background.className = 'black-background';
//   }
//   if (timesClicked % 2 === 1) {
//     $button.className = 'yellow-button';
//     background.className = 'light-yellow-background';
//   }
// }

var openModalButton = document.querySelector('.open-modal-button');
var noButton = document.querySelector('.no-button');
var displayOff = document.querySelector('.display-off');

openModalButton.addEventListener('click', openModalFunction);
function openModalFunction(e) {
  displayOff.className = 'container-2';
}

noButton.addEventListener('click', closeModalFunction);
function closeModalFunction(e) {
  displayOff.className = 'container-2 display-off';
}
