// // 1.0 (working)
// function addBlock() {
//   var existingElement = document.getElementById('list-3');
//   var newElement = document.createElement('div');
//   newElement.classList.add('box-style', 'delete-me');
//   existingElement.appendChild(newElement);
//   console.log(newElement);
// }

// 1.1
function addBlock() {
  var existingElement = document.getElementById('list-3');
  var newElement = document.createElement('div');
  newElement.classList.add('box-style', 'delete-me');
  existingElement.appendChild(newElement);
}

// 1.3 (final)
function deleteBlock() {
  var newItem = document.getElementsByClassName('delete-me')[0];
  var parentItem = newItem.parentNode;
  parentItem.removeChild(newItem);
}

// say hi!
function sayHi() {
  alert("well aren't you sweatshirt?");
}


// // currently deletes the whole div
// function deleteBlock() {
//   var deleteMe = document.getElementById('list-1');
//   deleteMe = deleteMe.lastChild;
//   var parentElement = document.getElementById('list-1')[1];
//   parentElement.remove(deleteMe);
//   console.log(deleteMe);
// }

// // 1.1
// function deleteBlock() {
//   var newItem = document.getElementsByClassName('delete-me')[1];
//   console.log(newItem);
//   // deleteMe = deleteMe.lastChild;
//   var parentItem = newItem.parentNode;
//   parentItem.removeChild(newItem);
// }

// // 1.2 (kinda works)
// function deleteBlock() {
//   var newItem = document.getElementsByClassName('delete-me')[1];
//   console.log(newItem);
//   var parentItem = newItem.parentNode;
//   console.log(parentItem);
//   parentItem.removeChild(newItem);
// }
