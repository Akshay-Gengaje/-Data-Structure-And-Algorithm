const bubbleSort = (arr) => {
  let pass = arr.length;

  // We are getting largest element at last index of array for every pass;
  for (let i = 1; i < pass; i++) {
    console.log(`\nPass ${i}`, arr);

    //We are comparing adjusent element with each other and swapping it. And also optimized comparisons.
    for (let j = 0; j < pass - i - 1; j++) {
      console.log("Compare : ", `[${arr[j]},${arr[j + 1]}]`);

      //Swapping
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        console.log("Swapped");
      }
    }
  }
  return arr;
};

const array = [10, 6, 2, 18, 16, 4, 8, 14];

const sortedArray = bubbleSort(array);
console.log("Sorted Array : ", sortedArray);
