// JavaScript program to find minimum element in a
// sorted and rotated array using binary search

function findMin(arr: number[], offset: number) {
  let lo = 0,
    hi = arr.length - 1;

  while (lo < hi) {
    // The current subarray is already sorted,
    // the minimum is at the low index
    if (arr[lo] < arr[hi]) return arr[lo];

    // We reach here when we have at least
    // two elements and the current subarray
    // is rotated

    const mid = Math.floor((lo + hi) / 2);

    // The right half is not sorted. So
    // the minimum element must be in the
    // right half.
    if (arr[mid] > arr[hi]) lo = mid + 1;
    // The right half is sorted. Note that in
    // this case, we do not change high to mid - 1
    // but keep it to mid. As the mid element
    // itself can be the smallest
    else hi = mid;
  }

  return arr[lo + offset];
}

// Driver Code
const arr2 = [5, 6, 0, 1, 0, 2, 3, 4, 7, 4];
console.log(
  "Second Smallest Element in Sorted Rotated Array",
  findMin(arr2, 1)
);
