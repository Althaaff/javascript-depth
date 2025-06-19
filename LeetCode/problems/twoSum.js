// var  = () => {
//   const newMap = new Map();

//   newMap.set("a", 1);
//   newMap.set("c", 3);
//   newMap.set("b", 2);

//   console.log(newMap.get("b"));
//   console.log(newMap.has("a"));
//   console.log(newMap.has(1));
//   console.log(newMap.delete("a"));

//   console.log(newMap);

//   newMap.forEach((key) => {
//     console.log(key);
//   });
// };

// mapFunc();

var twoSum = (nums, target) => {
  const newMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    // console.log(complement);

    if (newMap.has(complement)) {
      return [newMap.get(complement), i];
    }
    newMap.set(nums[i], i);
    // console.log("check", nums[i], i);
  }

  return [];
};

const nums = [1, 2, 3, 4, 5];
const target = 6;

console.log(twoSum(nums, target));
