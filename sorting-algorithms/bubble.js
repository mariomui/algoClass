/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order.
Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early).
After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements?
Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values
   and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/
//5,3,2,8 ; initial; 3,2,5,8 {1}; 2,3,5,8 {2} {2} ; 2, 3 ,5, 8
//      g: 4          g: 3            g: 2           g: 1
// the golem keeps advancing by 1 after each loop.

//written by me: mario
var bubbleSort = (arr) => {
  //loop through arr : m === 1
  // check m-1 with m ===1
  // until you reach arr.length -1 let's s
  var marchingGolem = arr.length - 1; // 2
  // the golem is the moving wall.
  while (marchingGolem >= 1) {
    for (var i = 1; i <= marchingGolem; i++) {
      const currentElem = arr[i];
      const prevElem = arr[i - 1];
      if (prevElem > currentElem) {
        [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      }
    }
    marchingGolem--;
  }
  // return arr;
};
