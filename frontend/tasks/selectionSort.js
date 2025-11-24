function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    let min_idx = i; // 0 1

    for (let j = i + 1; j < n; j++) {
      // 1 < 6 2 < 6 3 < 6 4 < 6
      if (arr[j] < arr[min_idx]) {
        min_idx = j;
      }
    }

    if (min_idx !== i) {
      // swap
      [arr[i], arr[min_idx]] = [arr[min_idx], arr[i]];
    }
  }

  return arr;
}

console.log(selectionSort([12, 16, 14, 1, 2, 3]));

// 16 < 12 ? X
// 14 < 12 ? X
// 1 < 2 true
