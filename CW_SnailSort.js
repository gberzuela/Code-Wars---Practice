/*
Snail Sort
Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]
For better understanding, please follow the numbers of the next array consecutively:

array = [[1,2,3],
         [8,9,4],
         [7,6,5]]
snail(array) #=> [1,2,3,4,5,6,7,8,9]

NOTE: The idea is not sort the elements from the lowest value to the highest; the idea is to traverse the 2-d array in a clockwise snailshell pattern.

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/

// *COULD NOT FIGURE OUT ENTIRELY BY MYSELF
// https://medium.com/@spencerwhitehead7/snail-sort-the-gimmick-sort-goat-310510814eab
let snail = (array) => {
	let result = [];

	while (array.length) {
		// Push the first line
		result.push(...array.shift());

		// Push the last values
		for (let i = 0; i < array.length; i++) {
			result.push(array[i].pop());
		}

		// *PRACTICE/REMEMBER THIS
		// Push the last line in reverse order
		// (...) spread operator will iterate through its arguments (array.pop() || [])
		// There will be edge cases where we finish in the previous step and leave array to be empty
		//  array.pop() will return undefined in this situation and will throw an error because .reverse()
		//  is called onto it.
		result.push(...(array.pop() || []).reverse());

		// Push first values starting from the bottom
		for (let i = array.length - 1; i >= 0; i--) {
			result.push(array[i].shift());
		}
	}
	// Repeat until array.length != 0
	// *REMEMBER*: 0 == False, 1+ == True

	return result;
};

console.log(
	snail([
		[1, 2, 3],
		[8, 9, 4],
		[7, 6, 5],
	])
);
// Should return [1,2,3,4,5,6,7,8,9]
