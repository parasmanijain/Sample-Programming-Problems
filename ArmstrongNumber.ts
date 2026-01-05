function isArmstrong(num: number) {
  // Convert the number to a string to easily extract digits
  let str = num.toString();

  // Initialize a variable to hold the sum of cubes of digits
  let sumOfPowers = 0;

  // Iterate over each digit
  for (let i = 0; i < str.length; i++) {
    let digit = parseInt(str[i]); // Get the digit
    sumOfPowers += Math.pow(digit, str.length); // Add the cube of the digit to the sum
  }

  // If the sum of cubes is equal to the original number, it's an Armstrong number
  return sumOfPowers === num;
}

// Test the function
console.log(371, isArmstrong(371));
console.log(151, isArmstrong(151));
console.log(9474, isArmstrong(9474));
console.log(1634, isArmstrong(1634));
console.log(12345, isArmstrong(12345));
