function chainPromisesSequentially(promiseFns) {
  let result = Promise.resolve();

  // console.log(result);

  for (let fn of promiseFns) {
    result = result
      .then((previousResult) => {
        return fn().then((currentResult) => {
          if (currentResult !== undefined) {
            console.log(currentResult);
          }
          // Here, we're returning the currentResult, which will be the
          // 'previousResult' in the next iteration also checking if the currentResult is not undefined then return current otherwise return previous which is empty resolve() .
          return currentResult !== undefined ? currentResult : previousResult;
        });
      })
      .catch((err) => console.log("rejected:", err));
  }

  return result;
}

const fn1 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 1 is DONE!");

      resolve();
    }, 2000);
  });
};

const fn2 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 2 is DONE!");

      const message = "promises resolved!";
      resolve(message);
    }, 2000);
  });
};

const fn3 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 3 is DONE!");

      resolve();
    }, 2000);
  });
};

const fn4 = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task 4 is DONE!");

      resolve();
    }, 2000);
  });
};

const fn5 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // console.log("Task 5 is Failed!");

      console.log("Task 5 is Done!");

      resolve();
    }, 2000);
  });
};

chainPromisesSequentially([fn1, fn2, fn3, fn4, fn5]).then((message) => {
  console.log("All Tasks are Done!");
  console.log(message);
});
