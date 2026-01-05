function pageCount(n: number, p: number) {
  let first = 0;
  let last = 0;
  let i = 1;
  while (i <= n) {
    if (i - p === 1 || i === p) {
      break;
    }
    first++;
    i += 2;
  }

  let j = n;
  while (j >= 1) {
    if (j === p) {
      break;
    }
    if (j % 2 === 0) {
      last++;
      j -= 1;
    } else {
      if (j - p === 1 || j === p) {
        break;
      } else {
        last++;
      }
      j -= 2;
    }
  }

  return Math.min(first, last);
}

console.log(pageCount(6, 2));
console.log(pageCount(6, 5));
console.log(pageCount(5, 4));
