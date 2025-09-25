var MyHashMap = function () {
  this.data = new Array(10001);
};

MyHashMap.prototype.put = function (key, value) {
  this.data[key] = value;
};

MyHashMap.prototype.get = function (key) {
  const value = this.data[key];
  return this.data[key] !== undefined ? value : -1;
};

MyHashMap.prototype.remove = function (key) {
  delete this.data[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap(
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */

const hashMap = new MyHashMap();
hashMap.put(1, 2);
hashMap.put(1, 3); // object key should be unqiue in JS 2nd one is overrides the first one //
hashMap.put(2, 4);
console.log(hashMap.get(1));
console.log(hashMap.get(3)); // it's (undefined) bcoz hashMap doesn't have key named (3) //
hashMap.remove(1);
console.log(hashMap.get(1));
