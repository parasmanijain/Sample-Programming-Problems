// JavaScript program to find smallest
// subarray with sum greater than x

// Returns the length of the smallest subarray
// with sum greater than or equal to x
function smallestSubWithSum(x: number, arr: number[]) {
  let i = 0,
    j = 0;
  let sum = 0;
  let ans = Infinity;

  while (j < arr.length) {
    // Expand window until sum > x
    // or end of array reached
    while (j < arr.length && sum <= x) {
      sum += arr[j++];
    }

    // If we reached end of array and sum
    // still <= x, no valid subarray exists
    if (j === arr.length && sum <= x) break;

    // Minimize window from start
    // while maintaining sum > x
    while (i < j && sum - arr[i] > x) {
      sum -= arr[i++];
    }

    ans = Math.min(ans, j - i);

    // Remove current start
    // element and shift window
    sum -= arr[i];
    i++;
  }

  // Return 0 if no valid subarray
  // found, else return min length
  if (ans === Infinity) return 0;
  return ans;
}

//driver code
let arr = [1, 4, 45, 6, 10, 19];
let x = 51;

console.log(smallestSubWithSum(x, arr));
