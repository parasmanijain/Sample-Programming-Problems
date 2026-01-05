function largestNumber(nums: number[]) {
  // Convert all numbers to strings
  const strNums = nums.map((num) => num.toString());

  // Custom comparator to decide the order
  strNums.sort((a, b) => {
    if (a + b > b + a) {
      return -1; // a comes before b
    } else if (a + b < b + a) {
      return 1; // b comes before a
    } else {
      return 0; // they are equal
    }
  });

  // Edge case: if the largest number is "0", return "0"
  if (strNums[0] === "0") {
    return "0";
  }

  // Join the sorted array into a single string and return
  return strNums.join("");
}

// Test the function with the given input
const input1 = [1, 34, 3, 98, 9, 76, 45, 4];
const result = largestNumber(input1);
console.log(result); // Output: "998764543431"
