function atoi(str: string) {
  // Trim leading and trailing whitespace
  str = str.trim();

  // Return 0 if the string is empty
  if (str.length === 0) {
    return 0;
  }

  // Check for sign
  let sign = 1;
  let start = 0;

  if (str[0] === "-") {
    sign = -1;
    start = 1; // Skip the sign for number parsing
  } else if (str[0] === "+") {
    start = 1; // Skip the sign for number parsing
  }

  let num = 0;

  // Traverse through the string and calculate the number
  for (let i = start; i < str.length; i++) {
    const char = str[i];

    // If the character is not a digit, return 0 (non-numeric character)
    if (char < "0" || char > "9") {
      return 0;
    }

    // Convert character to its corresponding digit and add to num
    num = num * 10 + (Number(char) - Number("0"));
  }

  return num * sign;
}

// Test the function
console.log(atoi("123")); // 123
console.log(atoi("-42")); // -42
console.log(atoi("   +456")); // 456
console.log(atoi("abc123")); // 0 (invalid)
console.log(atoi("   ")); // 0 (empty or just whitespace)
console.log(atoi("-91283472332")); // Handling large numbers, should still work
