/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */
/*
function Stack(capacity) {
  // implement me...
  this.storage = '';

}

Stack.prototype.push = function(value) {
  // implement me...
  this.storage += 'ø';
  this.storage += value;
};
// Time complexity:

Stack.prototype.pop = function() {
  // implement me...
  let str = this.storage.substring(this.storage.lastIndexOf('ø')+1,this.storage.length);
  this.storage = this.storage.substring(0,this.storage.lastIndexOf('ø'));
  return str;

};
// Time complexity:

Stack.prototype.peek = function() {
  // implement me...
  let answer = '';
  let i = 1;
  let count = 0;
  while (count !== 1) {
    if (this.storage[i]===('ø')){
      return answer;
    }
    answer += this.storage[i];
    i++;
  }
  return answer;
};
// Time complexity:

Stack.prototype.count = function() {
  // implement me...
    let count = 0;
    for ( let key in this.storage) {
      count += (this.storage[key] === 'ø') ? 1 : 0;
    }
    return count;
};
// Time complexity:
let myStack = new Stack;
myStack.push(10);
myStack.push(20);
myStack.push(30);
myStack.push(40);
myStack.push(50);
console.info(myStack.pop());
console.info(myStack.count());
console.info(myStack.peek());
console.log(myStack);


*/
//there's this code the teacher did with infinity 
/*
this._capacity = capacity || infinity;
and then any of the pushes would use it.
*/
let Stack = function() {
  this.storage = {};
  this.count = 0; //the teacher underscored all the properties? why? this._count
}

Stack.prototype.push = function(value) {
  
  // this.storage[Object.keys(this.storage).length.toString()] = value; 
  // i messed up by using keys. i cant use the array that Object keys makes.
  this.storage[this.count] = value;
  this.count++;
  //this is the teacher version.  is the O(N) better than mine?
  
}

Stack.prototype.pop = function() {
  //i suppose a try catch would take any count less than zero and throw an error.
  let value = this.storage[--this.count];
  delete this.storage[this.count];
  return value;
}

Stack.prototype.peek = function() {
  let value = this.storage[this.count-1];
  return value;
}

Stack.prototype.count = function() {
  return this.count; 
}

//exercise1
// 1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
Stack.prototype.minStack = function() {
  
}

//exercise 2
//2. Sort a stack so that its elements are in ascending order.

Stack.prototype.sort = function() {
  for (let i = 0; i < this.count; ++i) {

    for (let key in this.storage) {
      // let a = this.storage[key]; // you can't assing variables like this or it doesnt work. this actually assigns values.
      // let b = this.storage[(Number(key)+1)];
      // console.log(this.storage[(Number(key)+1)]);
      if (this.storage[key] > this.storage[Number(key)+1]) {
        [ this.storage[key],this.storage[Number(key)+1] ] = [ this.storage[Number(key)+1], this.storage[key] ];
      }
    }
  }
  return this.storage;
}
  let Stackhouse = new Stack;

Stackhouse.push(40);
Stackhouse.push(20);
Stackhouse.push(10);
Stackhouse.push(10);
Stackhouse.push(15);
Stackhouse.push(10);
Stackhouse.push(40);
console.log(Stackhouse.count);
console.log(Stackhouse.peek());
// console.info(Stackhouse.pop());
console.log(Stackhouse);
console.log(Stackhouse.sort());


let MinStack = function(capacity) {
  this._storage = {};
  this._count = 0;
  this.MinStack = new Stack;
}

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
