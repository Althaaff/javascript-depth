// // Approach 1 :
function removeDuplicates(arr) {
  const uniqueNumbers = [...new Set(arr)];

  return uniqueNumbers;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5]));

// Approach 2 :
function removeDuplicates(arr) {
  const uniqueNumbers = [...new Set(arr)]; // neigther //
  // const uniqueNumbers = Array.from(new Set(arr), (num) => num + 2); // readability and flexibility and we can directly pass map //

  return uniqueNumbers; // returns new array
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 5, 5]));

// Approach 3 :
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index); // checks indexOf(item) : items index is met first time to the index
}

console.log(removeDuplicates([1, 2, 3, 3, 4, 5]));

// Approach 3: Using an Object (Best for Large Arrays) :
function removeDuplicates(arr) {
  const seen = {};
  const result = [];

  for (let num of arr) {
    if (!seen[num]) {
      result.push(num);
      seen[num] = true;
    }
  }

  return result;
}

console.log(removeDuplicates([1, 1, 2, 3, 4, 5, 5, 6, 7, 8, 8]));
