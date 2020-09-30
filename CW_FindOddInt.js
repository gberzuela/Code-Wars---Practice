/*  
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

// Hash Practice
function findOdd(A) {
  let hash = new Map();
  for (let num of A) {
    if (hash.has(num)) {
      hash.set(num, hash.get(num) + 1);
    } else {
      hash.set(num, 1);
    }
  }

  for (let entries of hash.entries()) {
    if (entries[1] % 2 == 1) {
      return entries[0];
    }
  }
}
