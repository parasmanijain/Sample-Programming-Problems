function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function retryPromise<T>(
  fn: () => Promise<T>,
  retries: number,
  delayMs: number
): Promise<T> {
  let lastError: any;

  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      if (attempt === retries) break;

      await delay(delayMs);
    }
  }

  throw lastError;
}

async function retryPromiseBackoff<T>(
  fn: () => Promise<T>,
  retries = 3,
  baseDelay = 500
): Promise<T> {
  let lastError: any;

  for (let attempt = 0; attempt < retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      lastError = err;

      const delayMs = baseDelay * Math.pow(2, attempt); // exponential
      await new Promise((res) => setTimeout(res, delayMs));
    }
  }

  throw lastError;
}

const unstableApi = async () => {
  const count = Math.floor(Math.random() * 100);
  if (count < 50) {
    console.log(performance.now());
    throw new Error("Temporary failure");
  }
  console.log(count);
  return "Success!";
};

const result1 = await retryPromise(unstableApi, 5, 1000);
console.log(result1);

const result2 = await retryPromiseBackoff(unstableApi, 5, 1000);
console.log(result2);

export {};
