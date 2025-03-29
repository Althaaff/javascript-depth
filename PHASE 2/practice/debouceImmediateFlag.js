function debouce(func, wait, immediate) {
  let timeout;

  return function () {
    let context = this,
      args = arguments;

    const callNow = immediate && !timeout;

    // clear existing timeout if exist :
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      //in javascript The same function call doesnt restart itself when timeout = null (but a new call can now run immediately bcoz timout is null in the previous call)
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    }, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
}

const debouncedSearch = debouce(() => console.log("Searching..."), 600, true);

debouncedSearch();
debouncedSearch();
debouncedSearch();
