/* q1)event bubbling : on click or some other event, event function triggers from child to parent nodes i.e. from bottom to parent

there are some events which don not bubble , like onblur, onfocus etc which aare read only events


HTML frame/object
load
unload
scroll (except that a scroll event on document must bubble to the window)
HTML form
focus
blur
Mutation
DOMNodeRemovedFromDocument
DOMNodeInsertedIntoDocument
Progress
loadstart
progress
error
abort
load
loadend


*/

var div = document.querySelector(".div");
var form = document.querySelector(".form");
var button = document.querySelector(".button");

console.log(div);
div.addEventListener("onclick", function () {
  alert("div");
});

form.addEventListener("onclick", function () {
  alert("form");
});

button.addEventListener("onclick", function () {
  alert(button);
});
