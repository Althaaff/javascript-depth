class ChainCalculator {
  constructor(value = 0) {
    this.value = value;
  }

  addNum(num) {
    this.value += num;
    return this;
  }

  substract(num) {
    this.value -= num;
    return this;
  }

  multiply(num) {
    this.value *= num;
    return this;
  }

  devide(num) {
    if (num === 0) throw new Error("Cannot divide by zero");
    this.value /= num;
    return this;
  }

  getResult() {
    return this.value;
  }
}

const res = new ChainCalculator(5);
console.log("initial value", res);
res.addNum(5);
console.log(res);
res.substract(3);
console.log(res);
res.multiply(2);
console.log(res);
res.devide(2);
console.log(res);
console.log(res.getResult());
