function makeChuckArray(arr, k) {
  const chunks = [];

  for (let i = 0; i < arr.length; i += k) {
    let tempChunk = [];

    for (j = i; j < i + k && j < arr.length; j++) {
      tempChunk.push(arr[j]);
    }

    chunks.push(tempChunk);
  }

  return chunks;
}

const array = [1, 2, 3, 4, 5, 6, 7];

const chunked = makeChuckArray(array, 3);

console.log(chunked);
