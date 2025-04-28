async function fetchData() {
  try {
    const response = await fakeApiCall();

    console.log("data:", response);
  } catch (error) {
    console.error("Error occurred:", error.message);
  }
}

// fake api call :

function fakeApiCall() {
  return new Promise((resolve, reject) => {
    const success = Math.random() > 0.5; // 50% success / fail

    // console.log(success);

    setTimeout(() => {
      if (success) {
        resolve("Api resolved successfully..");
      } else {
        reject(new Error("API Call Failed!"));
      }
    }, 2000);
  });
}

fetchData();

// simple example for promise :
const newPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("resolved!");
  } else {
    reject("rejected!");
  }
});

newPromise.then((data) => {
  console.log(data);
});
