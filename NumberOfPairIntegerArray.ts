// JavaScript Program to count pairs with given sum
// using Hash Map

// Returns number of pairs in arr[0...n-1] with sum
// equal to 'target'
function countPairs(arr: number[], target: number) {
  const freq = new Map();
  let cnt = 0;

  for (let i = 0; i < arr.length; i++) {
    // Check if the complement (target - arr[i])
    // exists in the map. If yes, increment count
    if (freq.has(target - arr[i])) {
      cnt += freq.get(target - arr[i]);
    }

    // Increment the frequency of arr[i]
    freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
  }
  return cnt;
}

const arr = [1, 5, 7, -1, 5];
const target = 6;
console.log(countPairs(arr, target));
