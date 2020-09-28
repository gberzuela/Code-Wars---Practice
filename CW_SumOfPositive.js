/* You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0. */

function positiveSum(arr) {
  // .reduce(callback( accumulator, currentValue, [, index[, array]] )[, initialValue])
  //    (sum, x) => (accumulator, currentValue) ; sum = what we're incrementing and returning
  //                                                x = the values of arr
  //     => sum += x > 0 ? x : 0 ; ternary operation to only add x to sum if x is positive
  //     The last 0 is the [, initialValue] argument for the reduce method; sum starts at 0
  return arr.reduce((sum, x) => (sum += x > 0 ? x : 0), 0);
}

console.log(positiveSum([1, -4, 7, 12]));
