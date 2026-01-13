class MyPromise {
  constructor(executor) {
    this.state = "PENDING";
    this.value = undefined;
    this.reason = undefined;

    this.onFulfilledCallbacks = [];
    this.onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.state === "PENDING") {
        this.state = "FULFILLED";
        this.value = value;
        this.onFulfilledCallbacks.forEach((fn) => fn(value));
      }
    };

    const reject = (reason) => {
      if (this.state === "PENDING") {
        this.state = "REJECTED";
        this.reason = reason;
        this.onRejectedCallbacks.forEach((fn) => fn(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }
  }

  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilledHandler = (value) => {
        try {
          const result = onFulfilled ? onFulfilled(value) : value;
          resolve(result);
        } catch (err) {
          reject(err);
        }
      };

      const rejectedHandler = (reason) => {
        try {
          if (onRejected) {
            const result = onRejected(reason);
            resolve(result);
          } else {
            reject(reason);
          }
        } catch (err) {
          reject(err);
        }
      };

      if (this.state === "FULFILLED") {
        setTimeout(() => fulfilledHandler(this.value), 0);
      }

      if (this.state === "REJECTED") {
        setTimeout(() => rejectedHandler(this.reason), 0);
      }

      if (this.state === "PENDING") {
        this.onFulfilledCallbacks.push(fulfilledHandler);
        this.onRejectedCallbacks.push(rejectedHandler);
      }
    });
  }

  catch(onRejected) {
    return this.then(null, onRejected);
  }
}

const myPromise = new MyPromise((resolve, reject) => {
  const rand = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (rand < 5) {
      reject("Promise rejected");
    } else {
      resolve("Promise Resolved!");
    }
  }, 1000);
});

myPromise
  .then((result) => {
    console.log(result);
    return "Next value";
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log("Error:", err);
  });
