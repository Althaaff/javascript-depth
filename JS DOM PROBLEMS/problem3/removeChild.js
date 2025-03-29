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
  console.log("first element child:", parent.firstElementChild);
  console.log("last element child:", parent.lastElementChild);
  if (parent && parent.lastElementChild) {
    // Ensure parent exists & has a child
    parent.removeChild(parent.lastElementChild);
  }
}

const parent = document.getElementById("container");
removeOneChild(parent);
