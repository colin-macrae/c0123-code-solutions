let currentCount = 3;

setInterval(
  function () {
    if (currentCount === 3) {
      console.log('3');
    }

    if (currentCount === 2) {
      console.log('2');
    }

    if (currentCount === 1) {
      console.log('1');
    }

    if (currentCount === 0) {
      console.log('Blast off!');
    }
    currentCount -= 1;
  }
  , 1000);
