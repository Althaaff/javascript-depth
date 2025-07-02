// intToRoman logic in javascript :

function intToRoman(num) {
  if (!(1 <= num && num <= 3999)) {
    return "greater than 1 input should be less than 3999 ..!";
  }

  const romanMap = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  let result = "";

  // get the keys from the romanMap object using Object.keys(romanMap) iterate throgh those all keys and get value :
  Object.keys(romanMap).forEach((key, _) => {
    const romanMapKey = key;
    const romanMapValue = romanMap[key];

    // run (while loop) to check the (input num) is greater than (romanMapValue) :
    while (num >= romanMapValue) {
      result += romanMapKey;

      num -= romanMapValue;
    }
  });

  return result;
}

console.log(intToRoman(3999));
