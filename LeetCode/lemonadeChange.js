function lemonadeChange(bills) {
  let count_5 = 0;
  let count_10 = 0;

  for (let bill of bills) {
    if (bill === 5) {
      count_5 += 1;
    } else if (bill === 10) {
      if (count_5 >= 1) {
        count_5 -= 1;
        count_10 += 1;
      } else {
        return false;
      }
    } else {
      if (bill === 20) {
        // Always use ($10 + $5)first to preserve your precious $5 bills for future $10 payments.
        if (count_10 >= 1 && count_5 >= 1) {
          count_10 -= 1;
          count_5 -= 1;
        } else if (count_5 >= 3) {
          count_5 -= 3;
        } else {
          return false;
        }
      }
    }
  }

  return true;
}

console.log(lemonadeChange([5, 5, 5, 10, 20]));
console.log(lemonadeChange([5, 5, 10, 10, 20]));
