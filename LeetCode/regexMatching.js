// leetcode hard problem
/*
  10. Regular Expression Matching

  Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where:

  '.' Matches any single character.​​​​
  '*' Matches zero or more of the preceding element.
  The matching should cover the entire input string (not partial).
*/

function isMatch(s, p) {
  let memo = {};

  function dp(i, j) {
    let key = `${i},${j}`;

    if (memo[key] !== undefined) {
      return memo[key];
    }

    if (j === p.length) return i === s.length;

    // let's find first match :
    let firstMatch = i < s.length && (s[i] === p[j] || p[j] === "."); // returns boolean //

    console.log(s[i], p[j]);

    if (j + 1 < p.length && p[j + 1] === "*") {
      memo[key] = dp(i, j + 2) || (firstMatch && dp(i + 1, j));

      return memo[key];
    }
    // checking for current matching character //
    else {
      memo[key] = firstMatch && dp(i + 1, j + 1);

      return memo[key];
    }
  }

  return dp(0, 0);
}

console.log(isMatch("aa", "a"));
