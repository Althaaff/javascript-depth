const user = {
  name: {
    user: {
      userName: "Althaf",
    },
  },
  email: "email@gmail.com",
  phone: 9043234567,
  hobbies: ["coding", "playing", "reading"],
};

const userHobbies = user.hobbies.map((item, i) => {
  console.log(item, i);
});
console.log("Muhammad " + user.name.user.userName); // nested

const userInfo = [
  { name: "muhammad althaf", age: 20, education: "CS" },
  { skills: ["JS", "REACT JS", "NODE JS", "MONGO DB"] },
];

console.log(userInfo[0]);

const numbers = [1, 2, 3, 4, 5, 6];

const doubled = numbers.reduce((acc, curr) => {
  return [...acc, curr * 2];
}, []);

console.log(doubled);
