export function isArray(value) {
  return Array.isArray(value);
}

export function isFunction(value) {
  return typeof value === "function";
}

export function isObject(value) {
  return (
    (typeof value === "object" || typeof value === "function") && value !== null
  );
}

export function isPlainObject(value) {
  if (typeof value !== "object" || value === null || value === undefined) {
    return false;
  }

  const prototype = Object.getPrototypeOf(value);
  return prototype === null || prototype === Object.prototype;
}

console.log(isArray([1, 2, 3]));
console.log(isArray({}));
console.log(isArray("abc"));

console.log(isFunction(() => {}));
console.log(isFunction(function f() {}));
console.log(isFunction(class C {}));
console.log(isFunction({}));

console.log(isObject({}));
console.log(isObject([])); // arrays are objects
console.log(isObject(new Set()));
console.log(isObject(new Map()));
console.log(isObject(() => {})); // functions count as objects here
console.log(isObject(null));
console.log(isObject(123));
console.log(isObject("str"));

console.log(isPlainObject({ a: 1 }));
console.log(isPlainObject(Object.create(null)));
console.log(isPlainObject([]));
console.log(isPlainObject(new Date()));
console.log(isPlainObject(new (class {})()));
console.log(isPlainObject(() => {}));
