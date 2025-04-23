function fetchWithTimeOut(url, timeout) {
  return new Promise((resolve, reject) => {
    // start the timeout timer :
    const timer = setTimeout(() => {
      reject(new Error("request timeout after ", timeout, "ms!"));
    }, timeout);

    // start the fetch request :
    fetch(url)
      .then((response) => {
        clearTimeout(timer); // if fetch finishes the request clear timout //
        resolve(response);
      })
      .catch((err) => {
        clearTimeout(timer); // if fetch fails clear the timeout //
        reject(err);
      });
  });
}

fetchWithTimeOut("https://jsonplaceholder.typicode.com/posts", 3000)
  .then((response) => response.json())
  .then((data) => console.log("api successfull", data))
  .catch((err) => console.log(err));
