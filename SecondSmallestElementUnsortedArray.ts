// Javascript program to find smallest and
// second smallest elements

const print2Smallest = (arr: number[]) => {
  let i: number, first: number, second: number;

  /* There should be atleast two elements */
  if (arr.length < 2) {
    console.log(" Invalid Input ");
    return;
  }

  first = Number.MAX_VALUE;
  second = Number.MAX_VALUE;
  for (i = 0; i < arr.length; i++) {
    /* If current element is smaller than first 
        then update both first and second */
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] != first) second = arr[i];

    /* If arr[i] is in between first and second 
        then update second */
  }
  if (second == Number.MAX_VALUE)
    console.log("There is no second smallest element\n");
  else {
    console.log(
      "The smallest element is " +
        first +
        " and second " +
        "Smallest element is " +
        second +
        "\n"
    );
  }
};

console.log(print2Smallest([2, 23, 6, 16, 3, 17, 4]));
