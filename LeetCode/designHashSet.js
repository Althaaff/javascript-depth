// Design HashSet :

var MyHashSet = function () {
  this.set = new Array(1000001).fill(false);
};

MyHashSet.prototype.add = function (key) {
  this.set[key] = true;
};

MyHashSet.prototype.remove = function (key) {
  this.set[key] = false;
};

MyHashSet.prototype.contains = function (key) {
  return this.set[key];
};

let hashSet = new MyHashSet();
hashSet.add(2);
hashSet.add(3);
hashSet.add(4);
hashSet.remove(4);
console.log(hashSet.contains(4));
console.log(hashSet.contains(3));
