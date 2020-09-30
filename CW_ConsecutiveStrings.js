/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Example:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "".

Note
consecutive strings : follow one after another without an interruption
*/

function longestConsec(strarr, k) {
	/*
    Best Practice Solution
    */
	// Base cases: checks for valid k length
	if (k > strarr.length || k < 0) {
		return "";
	}

	// Slice the array from given index - index + k
	//  slice(start, end) returns a subarry from inclusive start index
	//  to exclusive end index
	// Join the slice and check the lengths
	let result = "";
	for (let i = 0; i <= strarr.length - k; i++) {
		let newString = strarr.slice(i, i + k).join("");
		result = newString.length > result.length ? newString : result;
	}
	return result;

	/* My solution
    // Base cases: return an empty string if the array in empty 
    //  or if k > length of the array
	if (strarr.length == 0 || k > strarr.length) {
		return "";
	}

    // Initialize max array to the be first k strings concatenated
	let max = "";
	for (let i = 0; i < k; i++) {
		max += strarr[i];
	}

    // Starting from the first index, check if the proceeding strings
    //  is longer than the max
	for (let i = 1; i <= strarr.length - k; i++) {
		let newStr = "";
		for (let j = 0; j < k; j++) {
			newStr += strarr[i + j];
		}
		max = newStr.length > max.length ? newStr : max;
	}

    return max;
    */
}
