// function sleep(ms) {
//   // ms means miliseconds

//   // above function returns promise :
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms);
//   });
// }

// console.log("Start!");
// sleep(2000)
//   .then(() => console.log("after 2 seconds Boom!"))
//   .catch(() => console.log("promise failed!"));
// console.log("End!");

// challenge :
// 🔹 Can you modify sleep(ms) to return both elapsed time and current time when it resolves?

function sleep(ms) {
  let startTime = Date.now(); // capture the start time //
  console.log(startTime);

  return new Promise((resolve) => {
    setTimeout(() => {
      let endTime = Date.now(); // capture end time //
      resolve({ elapsedTime: endTime - startTime, currentTime: endTime });
    }, ms);
  });
}
sleep(5000).then(({ elapsedTime, currentTime }) => {
  console.log(`elapsed time: ${elapsedTime} ms`);
  console.log(`current time: ${new Date(currentTime).toLocaleTimeString()}`);
});
// sleep(2000).then(() => {
//   console.log("Hello Javascript!");
// });

// challenge 2 :
