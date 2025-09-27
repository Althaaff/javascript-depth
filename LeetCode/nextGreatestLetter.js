// solution 1:
function nextGreatestLetter(arr, target) {
  const map = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  for (let letter of arr) {
    if (map[target] < map[letter]) {
      return letter;
    }
  }
  return arr[0];
}
console.log(nextGreatestLetter(["c", "f", "j"], "k"));

// solution 2:
function nextGreatestLetters(letters, target) {
  let lo = 0,
    hi = letters.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (letters[mid] <= target) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  return letters[lo % letters.length];
}

console.log(nextGreatestLetters(["c", "f", "j"], "a"));
