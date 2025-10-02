function shortestCompletingWord(str, words) {
  const cleanedPlate = str
    .split("")
    .filter((char) => isNaN(char))
    .join("")
    .toLowerCase();

  console.log(cleanedPlate);
  let plateFreq = {};

  for (let char of cleanedPlate) {
    plateFreq[char] = (plateFreq[char] || 0) + 1;
  }

  let shortestWord = null;

  for (let word of words) {
    var wordFreq = {};

    for (let char of word) {
      wordFreq[char] = (wordFreq[char] || 0) + 1;
    }

    let isCompleting = true;
    for (let char in plateFreq) {
      if (!wordFreq[char] || wordFreq[char] < plateFreq[char]) {
        isCompleting = false;
        break;
      }
    }

    if (isCompleting) {
      if (shortestWord === null || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  }

  return shortestWord;
}

const words = ["step", "steps", "stripe", "stepple"];
const licensePlate = "1s3 PSt";
console.log(shortestCompletingWord(licensePlate, words));
