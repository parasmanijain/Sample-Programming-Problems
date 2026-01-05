function isPowerOf(x: number, y: number) {
  // Handle edge cases where x <= 0 or y <= 1
  if (x <= 0 || y <= 1) {
    return false;
  }

  // Handle case where x is 1 (1 is a power of any number with exponent 0)
  if (x === 1) {
    return true;
  }

  // Keep dividing x by y while x is divisible by y
  while (x % y === 0) {
    x = x / y;
  }

  // If x becomes 1, then x was a power of y
  return x === 1;
}

// Test cases
console.log(isPowerOf(27, 3)); // Output: true (3^3 = 27)
console.log(isPowerOf(16, 4)); // Output: true (4^2 = 16)
console.log(isPowerOf(20, 5)); // Output: false (20 is not a power of 5)
console.log(isPowerOf(81, 3)); // Output: true (3^4 = 81)
console.log(isPowerOf(1, 10)); // Output: true (10^0 = 1)
console.log(isPowerOf(9, 3)); // Output: true (3^2 = 9)
console.log(isPowerOf(0, 2)); // Output: false (0 is not a power of any number)
console.log(isPowerOf(256, 4)); // Output: true (4^4 = 256)
