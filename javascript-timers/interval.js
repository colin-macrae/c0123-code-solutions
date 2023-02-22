setInterval(countdown, 1000);
var ticker = 1;
function countdown() {
  if (ticker === 1) {
    document.querySelector('.four').textContent = '4';
    ticker += 1;
  } else if (ticker === 2) {
    document.querySelector('.four').textContent = '3';
    ticker += 1;
  } else if (ticker === 3) {
    document.querySelector('.four').textContent = '2';
    ticker += 1;
  } else if (ticker === 4) {
    document.querySelector('.four').textContent = '1';
    ticker += 1;
  } else if (ticker === 5) {
    document.querySelector('.four').textContent = '~~Earth Beloowwww Usssss~~';
  }
}
