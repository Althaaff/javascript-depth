let array = new Array();
array[1000] = 1;
array[90] = 2;

console.log(array.length);
console.log(array[90]);

// Adding element in the array (approach 1):
const array1 = [1, 2, 3, 4];

array1.push(5, 6);

console.log(array1);

// Adding element in the array (approach 2):
// use Array.push() method to add the element at the end of the array :

const array2 = [1, 2, 3, 4, 5];

array2[array2.length] = 6;

console.log(array2);

// Adding element at the beginning of the array :
// using array.unshift method to add the element at the front of the array.

const array3 = [3, 4, 5];

array3.unshift(1, 2);

console.log(array3);

// Adding element at specific index in the array :
// use the Array.splice() method to add the element at specific index in the array.

const array4 = [2, 3, 4, 5, 6, 7];

array4.splice(0, 0, 1);

console.log(array4);
// ------------------------------------------------------------------------------------------------------------------------------------------ //

// Removing an array elements :
// using pop method :

const array5 = [1, 2, 3, 4, 5];

const lastElement = array5.pop(); // removes last element and returns //

console.log(lastElement);

console.log(array5);

// We can also use the length property to remove the elements from the array.
// This approach truncates the array and you will not get access to the removed elements.

// example :
const array6 = [1, 2, 3, 4, 5];

array6.length = 4;

console.log(array6);

// Removing element from the front of the array (shift method) :
// use Array.shift() method to remove the element from the front of the array and return it.
const array7 = [1, 2, 3, 4, 5];

const element = array7.shift();

console.log(element);

console.log(array7);

// Removing element from specific position in the array
// using Array.splice() method :
const array8 = [1, 2, 3, 4, 5];

const ele = array8.splice(2, 1);

console.log(ele);
console.log(array8);

// using Array.slice() method :
// Array.slice(start, end) removes all the element between the start and end index.
// It does not change the original array instead, returns a new copy with the element.

const array9 = [1, 2, 3, 4, 5, 6];

const ele1 = array9.slice(3, -2);
console.log(ele1);
// console.log(array9); original array unchanged

// Using delete operator to delete an element from the array
//  javascript arrays are really objects we can use the delete operator to remove elements from the array

delete array9[4];
console.log(array9); // 4th index element becomes empty //

// Accessing array elements
// As arrays are zero indexes based we can use the numeric index to access the elements of the array

const arr = [1, 2, 3, 4, 5, 6];

const num = arr[3];

console.log(num);

// Enumerating through array
// As javascript arrays are numeric index based we can use it’s length property to traverse through each element of the array.

const arr1 = [1, 2, 3, 4, 5];

for (let i = 0; i < arr1.length; i++) {
  console.log(arr1[i]);
}

// using for in loop :
// javascript arrays are really objects we can use for ... in loop to iterate through each elements.
// However you should keep in mind that there is no guarantee of order of properties when using for ... in.

for (let prop in arr1) {
  console.log(arr1[prop]);
}

//Using forEach() method
// We can use Array.forEach() to loop through each element of the given array.

arr1.forEach((ele, i) => {
  console.log(`element ${ele} - index ${i}`);
});

// Using for ... of loop
// for ... of loop iterates through all the iterable objects like Strings, Arrays, Map etc.

for (let val of arr1) {
  console.log(`element ${val}`);
}

// Sorting an array
// Javascript has an inbuilt method to sort the element of the array.

arr1.sort(); // default ascending order

arr1.sort((a, b) => b - a); // descending order

console.log(arr1);

// Using Array.indexOf()
// Array.indexOf() method returns the index of the matching element.
// If element is not found then it will return -1.

// example code:
const index = arr1.indexOf(3);
const indexOf = arr1.indexOf(6);

console.log(index);
console.log(indexOf);

// Using Array.includes()
// Array.includes() which is introduced in ES7 determines whether array contains the given element or not.
// It returns true or false based on the element found.

const isValule = arr1.includes(5);
const isValule1 = arr1.includes(8);

console.log(isValule);
console.log(isValule1);

// Multidimensional Javascript Array :
// Javascript arrays are very flexible and are not usally intialized.
// If you want an array with initialized value then you can use Array.fill(value) to fill the array with value.

const filledArray = new Array(5).fill(2);

console.log(filledArray);

// Javascript does not have an array of multiple dimension but like other C languages,
// it can have an array within an array :

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

console.log(matrix);
// console.log('length',matrix.length);
console.log(matrix.flat()); // returns new flattened array //

// You can loop through them to access all the elements :
for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log("ele", matrix[i][j]);
  }
}

// accessing matrix elements:
let arry = matrix[0][1];
console.log(arry);

// As we can have an array within an array, we can create nested arrays.

let nestedArr = [
  [
    [1, 2, 3],
    [4, 5, 6],
  ],
  [
    [7, 8, 9],
    [10, 11, 12],
  ],
];

for (let i = 0; i < nestedArr.length; i++) {
  for (let j = 0; j < nestedArr[i].length; j++) {
    for (let k = 0; k < nestedArr[i][j].length; k++) {
      console.log(`ele ${nestedArr[i][j][k]}`);
    }
  }
}

// Javascript arrays do not have any fixed dimension .
// so we can also create zigzag multi dimensional array which are of different lengths .

const zigzagArr = [
  [1, 2, 3],
  [4, 5],
  [6, 7, 8, 9],
];

console.log(zigzagArr[1].length); // 2 length

// Check if given value is array in javascript
// using Array.isArray ?

const isArray1 = Array.isArray(zigzagArr);
const isArray2 = Array.isArray("althaf");
const isArray3 = Array.isArray([]);
const isArray4 = Array.isArray({ a: 1, b: [1, 2, 3] });

console.log(isArray1);
console.log(isArray2);
console.log(isArray3);
console.log(isArray4);
