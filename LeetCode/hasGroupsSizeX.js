// algorithm steps :
// find frequencies of all numbers using hashMap while iteration of loop
// after that push all that frequency (numbers) in the single array and then remove duplicates ( include only unique )
// then check that array length is === 1 just return true otherwise just return false

function hasGroupSizeX(deck) {
  const freqMap = [...deck].reduce((currMap, element) => {
    currMap[element] = (currMap[element] || 0) + 1;

    return currMap;
  }, {});

  let frequencies = Object.values(freqMap);

  function gcd(a, b) {
    // euclidean algorithm: gcd(a, b) = gcd(b, a % b)
    while (b !== 0) {
      let temp = b;

      b = a % b;
      a = temp;
    }

    return a;
  }

  let result = frequencies[0];
  for (let i = 1; i < frequencies.length; i++) {
    result = gcd(result, frequencies[i]);

    if (result === 1) return false;
  }

  return result > 1;
}

console.log(hasGroupSizeX([1, 2, 3, 4, 4, 3, 2, 1]));
console.log(hasGroupSizeX([1, 1, 1, 2, 2, 2, 3, 3]));
console.log(hasGroupSizeX([1, 1]));
console.log(hasGroupSizeX([1]));
