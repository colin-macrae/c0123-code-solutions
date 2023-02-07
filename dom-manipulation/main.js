var $timesClicked = 0;
var $hotButton = document.querySelector('.hot-button');
var $clickCount = document.querySelector('.click-count');

$hotButton.addEventListener('click', buttonFunction);

function buttonFunction(e) {

  $timesClicked += 1;
  $clickCount.textContent = 'Clicks:' + $timesClicked;
  if ($timesClicked > 4) {
    $hotButton.className = 'hot-button cool';
  } if ($timesClicked > 7) {
    $hotButton.className = 'hot-button tepid';
  } if ($timesClicked > 10) {
    $hotButton.className = 'hot-button warm';
  } if ($timesClicked > 13) {
    $hotButton.className = 'hot-button hot';
  } if ($timesClicked > 16) {
    $hotButton.className = 'hot-button nuclear';
  }
}

// var $timesClicked = 0;
// var $hotButton = document.querySelector('.hot-button');
// var $clickCount = document.querySelector('.click-count');

// // this is the event listener, and it includes an action to be taken
// // when the event is heard being fired/raised
// // the first parameter is what is being listened to
// // the second is the object, in this case, a function, where
// // something is going to happen, in this case a function is
// // being placed right into that parameter as the argument.
// // an alternative to that is to create the function outisde of the
// // method and then just put the function name into the method
// // as done in the previous exercise.

// // this part is the actual listener method
// $hotButton.addEventListener('click', buttonChanger);

// // this part is the separated function used as argument above
// function buttonChanger(event) {
//   $timesClicked += 1;
//   // console.log($timesClicked);
//   $clickCount.textContent = 'Clicks:' + $timesClicked;
//   // document.getElementsByClassName('.cold');
//   if ($timesClicked < 4) {
//     $hotButton.className = 'hot-button cold';
//   } else if ($timesClicked < 7) {
//     $hotButton.className = 'hot-button cool';
//   } else if ($timesClicked < 10) {
//     $hotButton.className = 'hot-button tepid';
//   } else if ($timesClicked < 13) {
//     $hotButton.className = 'hot-button warm';
//   } else if ($timesClicked < 16) {
//     $hotButton.className = 'hot-button hot';
//   } else {
//     $hotButton.className = 'hot-button nuclear';
//   }
// }
