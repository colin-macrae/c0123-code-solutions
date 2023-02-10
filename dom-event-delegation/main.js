var taskList = document.querySelector('.task-list');

taskList.addEventListener('click', taskListCallback);
function taskListCallback(e) {
  console.log('event target:', e.target);
  console.log('event tagname:', e.target.tagName);
  if (e.target && e.target.nodeName === 'BUTTON') {
    console.log(taskList.closest('.task-list-item'));
    e.target.closest('.task-list-item').remove();
  }
}
