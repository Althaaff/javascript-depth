// function removeAllChildren(parent) {
//   let removed = false;
// while (parent.firstChild) {
//   parent.removeChild(parent.firstChild);
//   removed = true;
// }

//   console.log(removed);
// }

// const parent = document.getElementById("container");
// removeAllChildren(parent);

// Approach 2 using builtin method :
// function removeAllChildren(parent) {
//   parent.innerHTML = "";
// }

// const parent = document.getElementById("container");
// removeAllChildren(parent);

// remove specific child from the parent :
function removeOneChild(parent) {
  if (parent && parent.firstElementChild) {
    // Ensure parent exists & has a child
    parent.removeChild(parent.firstElementChild);
  }
}

const parent = document.getElementById("container");
removeOneChild(parent);
