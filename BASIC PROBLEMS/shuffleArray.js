function shuffleArray(array) {
  let shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Use shuffledArray.length - 1 to avoid accessing an undefined index,
    // ensuring we only swap valid elements in the array.
    let j = Math.floor(Math.random() * (i + 1));

    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

const arr = [1, 2, 3, 4, 5];
console.log(shuffleArray(arr));
