function throttle(func, delay) {
  let isThrottled = false;

  return function (...args) {
    if (!isThrottled) {
      func.apply(this, args); // excute the function

      isThrottled = true;
    }

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

// // usage of throttle function :
const logMessage = (message) =>
  console.log(message, new Date().toLocaleTimeString());

const throttleLog = throttle(logMessage, 2000);

setInterval(() => throttleLog("Throttle excution"), 500); // calls the function every 500ms, but throttled to execute every 2 seconds.

// const logMessage = () => {
//   console.log("throttle excution :", new Date().toLocaleTimeString());
// };
// const throttleLog = throttle(logMessage, 2000);

// setInterval(throttleLog, 500);
