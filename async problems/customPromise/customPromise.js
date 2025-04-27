class MyPromise {
  constructor(executor) {
    this.onResolve = null;
    this.onReject = null;
    this.status = "pending";
    this.value = undefined;

    const resolve = (value) => {
      console.log("value :", value);
      if (this.status === "pending") {
        this.status = "fullfilled";

        this.value = value;
        if (this.onResolve) {
          this.onResolve(value); //passes the value as an argument //
        }
      }
    };

    const reject = (reason) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = reason;

        if (this.onReject) {
          this.onReject(reason);
        }
      }
    };

    // immeditely excute the excutor function :
    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }

  then(onResolve) {
    this.onResolve = onResolve;

    // if promise already resolved then call immediately :
    if (this.status === "fullfilled") {
      // call it when the promise is fulfilled :
      this.onResolve(this.value);
    }

    return this;
  }

  catch(onReject) {
    this.onReject = onReject;

    // if promise already rejected then call immediately :
    if (this.status === "rejected") {
      this.onReject(this.value);
    }

    return this;
  }
}

// usage :
const p = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise Resolved succeed after 1 second..");
    // reject("Promise Rejected after 1 second !");
  }, 1000);
});

p.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log("REJECT", error);
});
