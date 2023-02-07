// // click event
function handleClick(event) {
  console.log('button clicked');
  console.log(event);
  console.log(event.target);
}

var $clickButton = document.querySelector('.click-button');
console.log($clickButton);

$clickButton.addEventListener('click', handleClick);

// mouseover event
function handleMouseover(event) {
  console.log('button hovered');
  console.log(event);
  console.log(event.target);
}

var $buttonHovered = document.querySelector('.hover-button');
console.log($buttonHovered);

$buttonHovered.addEventListener('mouseover', handleMouseover);

// doubleclick event
function handleDoubleClick(event) {
  console.log('button double-clicked');
  console.log(event);
  console.log(event.target);
}

var $eventDoubleClicked = document.querySelector('.double-click-button');
console.log($eventDoubleClicked);

$eventDoubleClicked.addEventListener('dblclick', handleDoubleClick);
