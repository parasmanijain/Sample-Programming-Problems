function longestRepeatingSubstring(s: string) {
  // Dictionary to store the first occurrence of each character
  const firstOccurrence = {};

  // Variables to track the best result
  let longestLength = 0;
  let longestIndex = -1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (firstOccurrence[char] !== undefined) {
      // Calculate the length of the repeating substring
      const startIndex = firstOccurrence[char];
      const length = i - startIndex + 1;

      // Update the longest repeating substring if necessary
      if (length > longestLength) {
        longestLength = length;
        longestIndex = startIndex;
      }
    } else {
      // Record the first occurrence of the character
      firstOccurrence[char] = i;
    }
  }

  // Return the result: the index of the start of the longest repeating substring and its length
  return [longestIndex, longestLength];
}

// Test the function with the given input
const inputString = "aabbbbddcc";
const result = longestRepeatingSubstring(inputString);
console.log(result); // Output: [2, 4]
