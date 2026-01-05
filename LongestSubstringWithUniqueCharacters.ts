// JavaScript code to find the largest substring with non-repeating
// characters using last index of repeated character

const MAX_CHAR = 26;

function longestUniqueSubstr(s: string) {
  const n = s.length;
  let res = 0;

  // last index of all characters is initialized as -1
  const lastIndex = new Array(MAX_CHAR).fill(-1);

  // Initialize start of current window
  let start = 0;

  // Move end of current window
  for (let end = 0; end < n; end++) {
    // Find the last index of s[end]
    // Update starting index of current window as
    // maximum of current value of end and last index + 1
    start = Math.max(
      start,
      lastIndex[s.charCodeAt(end) - "a".charCodeAt(0)] + 1
    );

    // Update result if we get a larger window
    res = Math.max(res, end - start + 1);

    // Update last index of s[end]
    lastIndex[s.charCodeAt(end) - "a".charCodeAt(0)] = end;
  }
  return res;
}

// Driver Code
const s = "geeksforgeeks";
console.log(longestUniqueSubstr(s));
