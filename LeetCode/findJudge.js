function findJudge(n, trust) {
  if (n === 1 && trust.length === 0) {
    return 1;
  }

  const score = new Array(n + 1).fill(0);
  for (let [a, b] of trust) {
    score[a]--;
    score[b]++;
  }
  // [0, 0, -1, 1];
  // [0, -1, -1, 2];
  // [0, -1, 1];
  // console.log(score.length);
  for (let i = 1; i < score.length; i++) {
    if (score[i] === n - 1) {
      return i;
    }
  }
  return -1;
}

console.log(findJudge(1, []));
console.log(findJudge(2, []));

console.log(
  findJudge(4, [
    [1, 3],
    [1, 4],
    [2, 3],
    [2, 4],
    [4, 3],
  ])
);

console.log(
  findJudge(3, [
    //3 trusted by someone trust some one (judege not found so return -1)
    [1, 3],
    [2, 3],
    [3, 1],
  ])
);
console.log(
  // 3 is trusted by someone trust none (3 is judge)
  findJudge(3, [
    [1, 3],
    [2, 3],
  ])
);
console.log(findJudge(2, [[1, 2]])); // 2 trusted by someone trust none (2 is judge)
