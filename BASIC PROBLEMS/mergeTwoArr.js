var mergeTwoLists = function (list1, list2) {
  // solution 1:
  let mergedList = [];

  for (let i = 0; i < list1.length; i++) {
    mergedList.push(list1[i]);
  }

  for (let i = 0; i < list2.length; i++) {
    mergedList.push(list2[i]);
  }

  return mergedList.sort();

  // solution 2:
  // mergedList = [...list1, ...list2];

  // return mergedList.sort();
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
console.log(mergeTwoLists([], []));
console.log(mergeTwoLists([], [0]));
