var taskList = document.querySelector('.task-list');
var taskListItem = document.querySelector('.task-list-item');

taskList.addEventListener('click', taskListCallback);
function taskListCallback(e) {
  console.log('event target:', e.target);
  console.log('event tagname:', e.target.tagName);
  if (e.target && e.target.nodeName === 'BUTTON') {
    console.log(taskList.closest('.task-list-item'));
    taskListItem.remove();
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
