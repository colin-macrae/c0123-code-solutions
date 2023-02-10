var $tabContainer = document.querySelector('.tab-container');
var $tabs = document.querySelectorAll('.tab');
var $views = document.querySelectorAll('.view');

$tabContainer.addEventListener('click', tabSwitcher);

function tabSwitcher(e) {
  if (e.target.matches('.tab')) {
    for (var i = 0; i < $tabs.length; i++) {
      if ($tabs[i] === e.target) {
        $tabs[i].className = 'tab active';
      } else if ($tabs[i] !== e.target) {
        $tabs[i].className = 'tab';
      }
    }

    var $label = e.target.getAttribute('data-view');

    for (var j = 0; j < $views.length; j++) {
      if ($views[j].getAttribute('data-view') !== $label) {
        $views[j].className = 'view hidden';
      } else {
        $views[j].className = 'view';
      }
    }
  }
}
