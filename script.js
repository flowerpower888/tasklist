var add = document.querySelector('.btn-add'),
  list = document.querySelector('.list'),
  input = document.querySelector('input');

if (localStorage.tasks) {
  list.innerHTML = localStorage.tasks;
}
input.focus();

//add sailor moon

document.querySelector('h1').addEventListener('click', function() {
  document.querySelector('img').classList.toggle('visible');
});

//create task

document.querySelector('form').addEventListener('submit', function(e) {
  e.preventDefault();
  list.innerHTML += '<li class="list-item">' + input.value + '<span class="close">' + 'x' + '</span>' + '</li>';
  input.value = null;
  storeTasks();
});

//cross out and remove

list.addEventListener('click', function(e) {
    if (e.target.classList.contains('close')) {
      e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    } else if (e.target.classList.contains('list-item')) {
      e.target.classList.add('crossout');
    };
    storeTasks();
  });


function storeTasks() {
  window.localStorage.tasks = list.innerHTML;
}





// var todoList = [];
//
//
// //create new array with values of 'in'
// document.getElementById('add').onclick = function () {
//
//   var task = document.getElementById('in').value;
//   todoList.push(task);
//   document.getElementById('in').value = null;
//
//
// //add li
//   var li = document.createElement('li');
//   li.innerHTML = task;
//   document.getElementById('outlist').appendChild(li);
//
//
// //create close button
//   function createCloseButton() {
//       var span = document.createElement("span");
//       span.innerHTML = 'x';
//       span.className = "close";
//       li.appendChild(span);
//
//       // for (i = 0; i <= li.length; i++){
//       //   createCloseButton(li[i]);
//       // }
//
// //remove task
//       span.onclick = function() {
//           document.getElementById('outlist').removeChild(li);
//       }
//   }
//   createCloseButton();
//
// //cross out task
//   li.onclick = function () {
//     li.style.textDecoration="line-through";
//   }
// }
//
//
//
//
//
//
//
//
//
// // function out () {
// //   var out = '';
// //   todoList.forEach (function(item) {
// //     out += item + '<br>';
// //   })
// //   document.getElementById('outlist').innerHTML = out;
// // }
// // out();
