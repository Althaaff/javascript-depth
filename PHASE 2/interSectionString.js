function findInterSection(arr1, arr2) {
  let freqMap = {};
  let result = [];

  for (let num of arr1) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  for (let num of arr2) {
    if (freqMap[num]) {
      result.push(num);

      freqMap[num]--;
    }
  }

  return result;
}

const arr1 = [1, 3, 4, 4, 6, 7, 8];
const arr2 = [1, 2, 4, 6, 7, 4];

console.log(findInterSection(arr1, arr2));
