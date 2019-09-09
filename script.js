const list = document.querySelector('.list'),
  input = document.querySelector('input');

if (localStorage.tasks) {
  list.innerHTML = localStorage.tasks;
}
input.focus();

//  add sailor moon

document.querySelector('h1').addEventListener('click', function() {
  document.querySelector('img').classList.toggle('visible');
});

//  create task

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  list.innerHTML += '<li class="list-item">' + input.value + '<span class="close">' + 'x' + '</span>' + '</li>';
  input.value = null;
  storeTasks();
});

//  cross out and remove

list.addEventListener('click', function(e) {
  if (e.target.classList.contains('close')) {
    e.target.parentNode.parentNode.removeChild(e.target.parentNode);
  } else if (e.target.classList.contains('list-item')) {
    e.target.classList.toggle('crossout');
  };
  storeTasks();
});


function storeTasks() {
  window.localStorage.tasks = list.innerHTML;
}
