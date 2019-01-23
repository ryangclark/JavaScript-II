// Create a callback function and invoke the function to test your work. 
// You have been provided an example of a problem and a solution to see how this works with our items array.  
// Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}
getLength(items, function(len) {
  console.log(`The length is ${len}.`)
});

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length -1]);
}
last(items, function(foo) {
  console.log(`The last item in 'items' is ${foo}.`)
});

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}
sumNums(3, 4, function(sum) {
  console.log(`The sum is ${sum}`)
});

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}
multiplyNums(3, 4, function(product) {
  console.log(`The product is ${product}`)
});

function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}
contains('b', ['a', 'e', 'i', 'o', 'u'], function(vowelTest) {
  console.log(`The letter 'b' is the list: ${vowelTest}`)
});

/* STRETCH PROBLEM */

function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  foo = [];
  for (i in array) {
    if (!foo.includes(array[i])) {
      foo.push(array[i]);
    }
  }
  return cb(foo);
}

removeDuplicates([1, 1, 2, 3, 3, 4, 5, 5], function(duplicateFree) {
  console.log(`The duplicate-free array is: ${duplicateFree}`)
});
