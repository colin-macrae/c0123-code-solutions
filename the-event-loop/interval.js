let currentCount = 3;

setInterval(
  () => {
    if (currentCount > 0) {
      console.log(currentCount);
    } else if (currentCount === 0) {
      console.log('Blast off!');
    } else return;
    currentCount -= 1;
  }
  , 1000);
