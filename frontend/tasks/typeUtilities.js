export function isBoolean(value) {
  return typeof value === "boolean";
}

export function isNumber(value) {
  return typeof value === "number";
}

export function isNull(value) {
  return value === null;
}

export function isString(value) {
  return typeof value === "string";
}

export function isSymbol(value) {
  return typeof value === "symbol";
}

export function isUndefined(value) {
  return value === undefined; // cleaner and more common than typeof
  // or: return typeof value === "undefined";
}

console.log(isNull(null));
console.log(isSymbol(Symbol()));
console.log(isUndefined(undefined));
console.log(isNumber(1));
console.log(isString("string?"));
