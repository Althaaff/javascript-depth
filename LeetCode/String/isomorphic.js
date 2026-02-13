function isomorphicString(s, t) {
  if (s.length !== t.length) return false;

  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];
    const charT = t[i];

    if (mapST.has(charS)) {
      if (mapST.get(charS) !== charT) {
        return false;
      }
    } else {
      mapST.set(charS, charT);
    }

    if (mapTS.has(charT)) {
      if (mapTS.get(charT) !== charS) {
        return false;
      }
    } else {
      mapTS.set(charT, charS);
    }
  }

  return true;
}

console.log(isomorphicString("add", "egg"));
console.log(isomorphicString("paper", "title"));
console.log(isomorphicString("foo", "bar"));
console.log(isomorphicString("badc", "baba"));
