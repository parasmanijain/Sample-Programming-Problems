function formingMagicSquare(s: number[][]) {
  const n = s.length; // Dimension of the square
  const numbers = Array.from({ length: n * n }, (_, i) => i + 1);
  const magicConstant = (n * (n * n + 1)) / 2;
  let minCost = Infinity;

  // Helper to check if a square is magic
  const isMagic = (square: number[][]) => {
    // Check rows and columns
    for (let i = 0; i < n; i++) {
      if (
        square[i].reduce((a, b) => a + b, 0) !== magicConstant ||
        square.map((row) => row[i]).reduce((a, b) => a + b, 0) !== magicConstant
      ) {
        return false;
      }
    }
    // Check diagonals
    const diag1 = square.reduce((sum, row, idx) => sum + row[idx], 0);
    const diag2 = square.reduce((sum, row, idx) => sum + row[n - 1 - idx], 0);
    return diag1 === magicConstant && diag2 === magicConstant;
  };

  // Generate all permutations of numbers 1 to n^2
  const permute = (arr: number[], start = 0) => {
    if (start === arr.length - 1) {
      const square: number[][] = [];
      for (let i = 0; i < n; i++) {
        square.push(arr.slice(i * n, (i + 1) * n));
      }
      if (isMagic(square)) {
        // Calculate cost to convert input square to this magic square
        let cost = 0;
        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            cost += Math.abs(s[i][j] - square[i][j]);
          }
        }
        minCost = Math.min(minCost, cost);
      }
      return;
    }

    for (let i = start; i < arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]];
      permute([...arr], start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // Backtrack
    }
  };

  permute(numbers);

  return minCost;
}

// Example usage for 3x3 square
const s3x3 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

console.log(formingMagicSquare(s3x3)); // Output: 1
