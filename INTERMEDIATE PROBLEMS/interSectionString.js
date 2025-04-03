function findInterSection(arr1, arr2) {
  let freqMap = {};
  let result = [];

  for (let num of arr1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (freqMap[num]) {
      result.push(num);
      console.log(freqMap[num]);

      freqMap[num]--;
    }
  }

  return result;
}

const arr1 = [2, 2, 4, 5, 6, 2];
const arr2 = [2, 4, 2, 2, 8, 0];

console.log(findInterSection(arr1, arr2));
