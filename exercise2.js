const greatestDiff = arr => {
  let largest = arr[0];
  let smallest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let largeChanged = false;
    if (arr[i] > largest) {
      largest = arr[i];
      largeChanged = true;
    }
    if (largeChanged && arr[i - 1] < smallest) {
      smallest = arr[i - 1];
    }
  }
  return largest - smallest > 0
    ? largest - smallest
    : 'Array is in decending order';
};

console.log(greatestDiff([5, 89, 59]));
