function compressString(input: string) {
  // Edge case: If the input string is empty, return an empty string
  if (input.length === 0) {
    return "";
  }

  let result = "";
  let count = 1;

  // Loop through the string to count consecutive characters
  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++; // Increment the count for the same character
    } else {
      result += count + input[i - 1]; // Append count and character to result
      count = 1; // Reset count for the new character
    }
  }

  // Append the last character and its count
  result += count + input[input.length - 1];

  return result;
}

// Test example
const input = "SSSSSTTPPQ";
const output = compressString(input);
console.log(output); // Output: "5S2T2P1Q"
