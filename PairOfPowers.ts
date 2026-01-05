function findPairs(arr: number[]) {
  let result: number[][] = [];
  let n = arr.length;
  let seen = new Set();

  // Iterate through all pairs (i, j)
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let a = arr[i];
      let b = arr[j];

      // We skip pairs where a and b are the same
      if (a === b) continue;

      // Apply the logarithmic transformation a^b = b^a
      if (Math.abs(b * Math.log(a) - a * Math.log(b)) < 1e-10) {
        // Check for unique pairs to avoid duplicates
        if (!seen.has(`${a},${b}`) && !seen.has(`${b},${a}`)) {
          result.push([a, b]);
          seen.add(`${a},${b}`);
          seen.add(`${b},${a}`);
        }
      }
    }
  }

  return result;
}

// Example Usage:
const arr = [2, 4, 3, 27, 9, 19683];
console.log(findPairs(arr));
