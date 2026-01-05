// Function to find the longest palindrome substring
function longestPalSubstr(s: string) {
  const n = s.length;
  if (n === 0) return "";

  let start = 0;
  let maxLen = 1;

  // Traverse the input string
  for (let i = 0; i < n; i++) {
    // THIS RUNS TWO TIMES
    // for both odd and even length
    // palindromes. j = 0 means odd
    // and j = 1 means even length
    for (let j = 0; j <= 1; j++) {
      let low = i;
      let hi = i + j;

      // Expand substring while it is a palindrome
      // and in bounds
      while (low >= 0 && hi < n && s[low] === s[hi]) {
        const currLen = hi - low + 1;
        if (currLen > maxLen) {
          start = low;
          maxLen = currLen;
        }
        low--;
        hi++;
      }
    }
  }

  return s.substring(start, start + maxLen);
}

// Driver Code
const s = "forgeeksskeegfor";
console.log(longestPalSubstr(s));
