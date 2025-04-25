function chainPromisesSequentially(promiseFns) {
  let result = Promise.resolve();

  console.log(result);

  for (let fn of promiseFns) {
    result = result
      .then(() => fn)
      .catch((err) => console.log("rejected:", err));
  }

  return result;
}

const fn1 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Task 1 is DONE!");

    resolve();
  }, 2000);
});

const fn2 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Task 2 is DONE!");

    resolve();
  }, 2000);
});

const fn3 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Task 3 is DONE!");

    resolve();
  }, 2000);
});

const fn4 = new Promise((resolve) => {
  setTimeout(() => {
    console.log("Task 4 is DONE!");

    resolve();
  }, 2000);
});

const fn5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Task 5 is Failed!");

    reject("failed task!");
  }, 2000);
});

chainPromisesSequentially([fn1, fn2, fn3, fn4, fn5]).then(() =>
  console.log("All Tasks are Done!")
);
