// Javascript program to add 2 fractions

// Function to return gcd of a and b

const gcd = (a: number, b: number) => {
  if (a == 0) return b;
  return gcd(b % a, a);
};

// Function to convert the
// obtained fraction into
// it's simplest form

const lowest = (den3: number, num3: number) => {
  // Finding gcd of both terms
  let common_factor = gcd(num3, den3);

  // Converting both terms
  // into simpler terms by
  // dividing them by common factor

  den3 = den3 / common_factor;
  num3 = num3 / common_factor;

  console.log(`${num3}/${den3}`);
};

// Function to add two fractions
const addFraction = (
  num1: number,
  den1: number,
  num2: number,
  den2: number
) => {
  // Finding gcd of den1 and den2
  let den3 = gcd(den1, den2);

  // Denominator of final
  // fraction obtained finding
  // LCM of den1 and den2
  // LCM * GCD = a * b
  den3 = (den1 * den2) / den3;

  // Changing the fractions to
  // have same denominator Numerator
  // of the final fraction obtained
  let num3 = num1 * (den3 / den1) + num2 * (den3 / den2);

  // Calling function to convert
  // final fraction into it's
  // simplest form
  lowest(den3, num3);
};

// Driver Code
let num1 = 1;
let den1 = 500;
let num2 = 2;
let den2 = 1500;

console.log(`${num1}/${den1} + ${num2}/${den2} is equal to `);

addFraction(num1, den1, num2, den2);
