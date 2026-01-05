// JavaScript program to Find the Nth row in Pascal’s
// Triangle using efficient approach
function generateNthrow(n: number, k: number) {
  let res: number[] = [];

  // nC0 = 1
  let prev = 1;
  res.push(prev);

  for (let i = 1; i <= n; i++) {
    // nCr = (nCr-1 * (n - r + 1))/r
    let curr = Math.floor((prev * (n - i + 1)) / i);
    res.push(curr);
    prev = curr;
  }
  return res[k];
}

let n = 5;
let k = 2;
let arr = generateNthrow(n - 1, k - 1);
console.log(arr);
