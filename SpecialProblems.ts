function fillProblemsInASubPage(
  offset: number,
  limit: number,
  remaining: number
) {
  let a: number[] = [];
  let start = offset * limit + 1;
  let end = offset * limit + remaining;
  for (let i = start; i <= end; i++) {
    a.push(i);
  }
  return a;
}

function fillSubPagesChapter(chap: number, k: number) {
  let offset = 0;
  let n1: Array<Array<number>> = [];
  n1.push([...fillProblemsInASubPage(offset, k, k)]);
  let rem = chap - k;
  while (rem > k) {
    n1.push([...fillProblemsInASubPage(++offset, k, k)]);
    rem = rem - k;
  }
  if (rem > 0) {
    n1.push([...fillProblemsInASubPage(++offset, k, rem)]);
  }
  return n1;
}

/*
 * Complete the 'workbook' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY arr
 */

function workbook(_n: number, k: number, arr: number[]) {
  let n1: Array<number[][]> = [];
  arr.forEach((el: number) => {
    if (el > k) {
      n1 = [...n1, fillSubPagesChapter(el, k)];
    } else {
      n1 = [...n1, fillSubPagesChapter(el, el)];
    }
  });
  let special = 0;
  let flattenedArray: Array<number[]> = n1.flat();
  flattenedArray.forEach((el, index) => {
    if (el.includes(index + 1)) {
      special++;
    }
  });
  return special;
}

console.log(workbook(10, 5, [3, 8, 15, 11, 14, 1, 9, 2, 24, 31]));
