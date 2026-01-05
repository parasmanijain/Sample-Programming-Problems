function fibonacciMemoization(n: number, memo = {}) {
  if (n in memo) return memo[n]; // Return memoized result if already calculated
  if (n === 0) return 0;
  if (n === 1) return 1;

  memo[n] =
    fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo); // Memoize result
  return memo[n];
}

// Test the function
console.log(fibonacciMemoization(10)); // Output: 55
