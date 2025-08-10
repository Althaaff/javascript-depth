// Assign Cookies :

function findContentChildren(childrens, cookies) {
  childrens.sort((a, b) => a - b);
  cookies.sort((a, b) => a - b);

  let happyCookiesCount = 0;
  let i = 0;
  let j = 0;

  while (i < cookies.length) {
    if (cookies[i] >= childrens[j]) {
      happyCookiesCount++;
      i++;
      j++;
    } else {
      i++;
    }
  }
  return happyCookiesCount;
}

console.log(findContentChildren([3, 5, 4], [3, 7]));
console.log(findContentChildren([10, 9, 8, 7, 10, 9, 8, 7], [10, 9, 8, 7]));
console.log(findContentChildren([1, 2, 3], [1, 1]));
console.log(findContentChildren([1, 2], [1, 2, 3]));
console.log(findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]));
console.log(findContentChildren([1, 2, 3], [3]));
