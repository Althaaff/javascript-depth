function sortUniqueAndGetFirstOccurrence(arr) {
  // Step 1: Create a new array to store the first occurrences
  let firstOccurrences = [];

  // Step 2: Find the first occurrences
  for (let i = 0; i < arr.length; i++) {
    if (firstOccurrences.indexOf(arr[i]) === -1) {
      firstOccurrences.push(arr[i]);
    }
  }

  // Step 3: Implement a simple sorting algorithm (Bubble Sort) for unique numbers
  for (let i = 0; i < firstOccurrences.length; i++) {
    for (let j = 0; j < firstOccurrences.length - 1; j++) {
      if (firstOccurrences[j] > firstOccurrences[j + 1]) {
        // Swap the elements
        let temp = firstOccurrences[j];
        firstOccurrences[j] = firstOccurrences[j + 1];
        firstOccurrences[j + 1] = temp;
      }
    }
  }

  // Step 4: Return the sorted unique numbers and the first occurrences
  return {
    sortedUnique: firstOccurrences,
    firstOccurrences: firstOccurrences,
  };
}

// Example usage
const inputArray = [1, 3, 5, 2, 6, 4, 9, 3, 7, 8, 9, 2, 2, 10];
const result = sortUniqueAndGetFirstOccurrence(inputArray);
console.log("Sorted Unique Numbers:", result.sortedUnique);
console.log("First Occurrences:", result.firstOccurrences);
