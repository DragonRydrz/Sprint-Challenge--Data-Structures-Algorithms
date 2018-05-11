Add your answers to the Algorithms exercises here.

# Exercise I

* A. O(n) - This will run once for each n.
  * n = 5; a < 125 ; 0, 25, 50, 75, 100
* B. i will never reach 0 so 2nd condition will always be true. What is x??
* C. O(sqrt(n) \* 8)
* D. O(sqrt n)
* E. O(n^3)
* F. O(n) running bunnyEars function once for each bunny
* G. O(n) worst case -- running the search once for each item in the array

# Exercise 2

#### Given an array (a) of (n) numbers, design a linear running time algorithm to find the maximum value of a[j] - a[i], where j >= i.

```js
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
```

# Exercise 3

It doesnt matter if you use the first, last or a middle number as the pivot. Either way the entire array is getting passed into the quicksort for however many numbers are in the array.
