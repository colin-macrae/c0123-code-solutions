// after correct character is typed the cursor
// moves to the next character
// use text decoration underline i think

var counter = 0;
var characters = document.querySelectorAll('span');
// var black = document.querySelector('.black');

document.addEventListener('keydown', toGreenOrRed);

// console.log(characters[counter].textContent);

function toGreenOrRed(e) {
  if (e.key === characters[counter].textContent) {
    characters[counter].className = 'green';
    characters[counter + 1].className = 'black underline';
    counter += 1;
  } else if (characters[counter].textContent === '&nbsp;') {
    counter += 1;
  } else if (e.key !== characters[counter].textContent) {
    characters[counter].className = 'red';
  }

}

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

// function toGreenOrRed(e) {
//   // console.log(event.key);
//   if (event.key === 'g') {
//     counter += 1;
//     black01.className = 'green01';
//     console.log(counter);
//   } else {
//     black01.className = 'red01';
//   }
//   if (event.key === 'r') {
//     counter += 1;
//     black02.className = 'green02';
//     console.log(counter);
//   } else {
//     black02.className = 'red02';
//   }

// if (event.key === 'r') {
//   counter += 1;
//   black02.className = 'green02';
//   console.log(counter);
// } else {
//   black02.className = 'red02';
// }

// else if (event.key === 'r' && counter === 1) {
//   counter += 1;
//   black02.className = 'green02';
//   console.log(counter);
// }
// else if (event.key === 'u' && counter === 2) {
//   counter += 1;
//   black03.className = 'green03';
//   console.log(counter);
// }
