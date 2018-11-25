/*
INSERTION SORT

*** Description

Iterate over array and grow a sorted array behind current element.

For each position, compare value of element with previous elements and swap positions if previous element is larger.

example:
[ 3 4 5|1 2 6 ]
 sorted|unsorted
swaps:
[ 3 4 1 5|2 6 ]
[ 3 1 4 5|2 6 ]
[ 1 3 4 5|2 6 ]
now repeat for next unsorted element

*** Exercises

- Implement insertion sort for array of numbers
- Identify time complexity

- Modify function to take comparator function. specify default if not provided (check out native Array.sort comparator function for reference)
- Use your comparator function to verify that your sort is stable by taking input: [{value: 15}, {value: 10, order: 1}, {value: 10, order: 2}]

*** Extra credit
- Implement shell sort, a generalization of insertion sort
(https://en.wikipedia.org/wiki/Shellsort)

*/

var insertionSort = function (arr) {
  //create bookmark as sortedIdx === 0
  var bookmark = 0;
  //loop through o1ur array.:M === 1
  for (var i = bookmark; i < arr.length; i++) {
    //loop through our array until +sortedIdx: N
    const currElem = arr[i];
    for (var j = 0; j < bookmark; j++) {
      debugger;
      var innerElem = arr[j];
      //if value@M < value@N insert before
      if (currElem < innerElem) {
        var temp = arr.splice(i, 1);
        arr.splice(j, 0, ...temp);
        // bookmark++;
        //1 2 | 3 4 5 m=== 2 n=0 n =1 so push to n=2 next loop m ===3
        // 1 2 3 | 4 5 m === 3 n=0
        break;
      }
      // +sortedIdx increment
      //N should be incremented too
    }
    bookmark++;
  }
  return arr;
  //if value@M > value@N insert after
  //+sortedIdx is incremented
  //N should be incrmeented as well
  //stop looping when M === arr.length
  //a, b, c, d.
  //[] is unsorted, abcd is sorted
  //a > unsorted[i], end loop
};

var jack = insertionSort([1, 3, 1, 2]);
console.log(jack);
