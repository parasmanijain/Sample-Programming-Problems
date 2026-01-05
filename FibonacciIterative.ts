function fibonacciIterative(n: number) {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let prev1 = 1,
    prev2 = 0;

  for (let i = 2; i <= n; i++) {
    let current = prev1 + prev2;
    prev2 = prev1;
    prev1 = current;
  }

  return prev1;
}

// Test the function
console.log(fibonacciIterative(10)); // Output: 55
