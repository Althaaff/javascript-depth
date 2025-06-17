// Iterating with javascript Set :
let set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add(4);

// doubling set object items using map method //
// set doesnt have map method in it but we can convert set object to array using (spread operator) :
// example code :

const doubledArray = [...set].map((item) => {
  return item * 2;
});

// returns new array :
console.log(doubledArray);

for (item in doubledArray) {
  console.log("In :", item);
}

set.add(doubledArray);

doubledArray.forEach((item) => {
  console.log(item * 2);
});

set.forEach((item) => {
  if (Array.isArray(item)) {
    item.map((item) => {
      console.log("arr item :", item);
    });
  } else {
    console.log(item * 2);
  }
});

for (let item of set) {
  console.log(typeof item);
}

console.log(set);

const sk = [{ a: 1, b: 2, c: 3 }, [1, 2, 3, 4]];

sk.forEach((item) => {
  if (typeof item === "object") {
    console.log("keys", Object.keys(item));
    Object.keys(item).forEach((key) => {
      console.log(`key: ${key} - value: ${item[key]}`);
    });
  }
});

console.log(sk);

// Iterating objects of Set :
let set2 = new Set();

set2.add(1);
set2.add("prashant");
set2.add({ a: 1, b: 2, c: 3, d: 4 });

for (let item of set2.keys()) {
  console.log(item);
}

for (let item of set2.values()) {
  console.log(item);
}

for (let [key, value] of set2.entries()) {
  console.log("key :", key, "-", "value :", value);
}
console.log(set2);

let set3 = new Set();

set3.add(1);
set3.add(2);
set3.add(3);

// using ` .next` :
const iterator = set3.values();
console.log(iterator);
console.log(iterator.next().value);
console.log("call", iterator.next().value);
console.log("call", iterator.next().value);
console.log("call", iterator.next()); // done: true --> there are no more values to iterate

iterator.forEach((elm) => {
  console.log("elm", elm);
});

Object.entries([...set3]).forEach((elm) => {
  console.log(elm[0]);
  console.log(elm[1]);
});

const mySet = new Set([1, 2, 3, 4]);
const mySet1 = new Set([4, 5, 6, 7]);

mySet.forEach((elm) => {
  console.log(elm);
});

mySet1.forEach((elm) => {
  console.log(elm);
});

console.log("my set", mySet);
console.log("my set", mySet1);
