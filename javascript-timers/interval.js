var ticker = 4;
var countDownId = null;
var $countDown = document.querySelector('.countdown-display');

function countDown() {
  ticker--;
  if (ticker > 0) {
    $countDown.textContent = ticker;
  } else {
    $countDown.textContent = '~~Earth Beloowwww Usssss~~';
    clearInterval(countDownId);
  }
}
countDownId = setInterval(countDown, 1000);

// // CODE BELOW IS MY ORIGINAL METHOD (REJECTED BUT FUNCTIONAL), AND WITHOUT clearInterval();
// var interval = setInterval(countdown, 1000);
// var ticker = 1;
// function countdown() {
//   if (ticker === 1) {
//     document.querySelector('.four').textContent = '4';
//     ticker += 1;
//   } else if (ticker === 2) {
//     document.querySelector('.four').textContent = '3';
//     ticker += 1;
//   } else if (ticker === 3) {
//     document.querySelector('.four').textContent = '2';
//     ticker += 1;
//   } else if (ticker === 4) {
//     document.querySelector('.four').textContent = '1';
//     ticker += 1;
//   } else if (ticker === 5) {
//     document.querySelector('.four').textContent = '~~Earth Beloowwww Usssss~~';
//   }
// }
