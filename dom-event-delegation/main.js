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
