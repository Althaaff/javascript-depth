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
