// function deepClone(obj) {
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   const clone = Array.isArray(obj) ? [] : {};
//   console.log(clone);

//   for (let key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       clone[key] = deepClone(obj[key]);
//     }
//   }

//   return clone;
// }

// const original = {
//   name: "Muhammad althaf",
//   details: {
//     age: 20,
//     skills: ["javascript", "react"],
//   },
// };

// const copied = deepClone(original);

// copied.name = "Muhammad Ansar";
// copied.details.age = 16;
// copied.details.skills.unshift("Node Js"); // inser new elements from the start of an array //

// console.log(original);
// console.log(copied);

// #2 deepclone of an object
function deepClonee(object) {
  if (object === null || typeof object !== "object") {
    return object;
  }

  const clone = Array.isArray(object) ? [] : {};

  for (let key in object) {
    console.log(key);

    // copieng recursively:
    if (object.hasOwnProperty(key)) {
      clone[key] = deepClonee(object[key]); // recursively copy
    }
  }

  return clone;
}

const original = {
  userInfo: {
    username: "Muhammad Althaf",
    age: 25,
    education: "BCA",
    CGPA: 8.12,
  },
  skills: ["Javascript", "React", "Node Js", "Socket.io"],
  isEmployee: true,
  contact: 9741326756,
};

const copied = deepClonee(original);

copied.userInfo.age = 20;
copied.userInfo.education = "MCA";
copied.userInfo.CGPA = 9.0;
copied.skills.push("Redux Toolkit");
copied.isEmployee = false;
copied.contact = null;

console.log("original", original);
console.log("copied", copied);
