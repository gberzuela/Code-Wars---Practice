/*
The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]
Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.
*/

// *NEED TO WORK ON THIS ONE
// Dynamic programming problem?
var maxSequence = function (arr) {
	let max = 0;
	let curr = 0;

	// curr is current running sum. If it ever reaches negative,
	// we restart the value to check another subarray
	for (let num of arr) {
		curr += num;
		curr = curr < 0 ? 0 : curr;
		max = max < curr ? curr : max;
	}

	return max;
};
