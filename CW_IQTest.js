/* 
Bob is preparing to pass IQ test. The most frequent task in this test is to find out which one of the given numbers differs from the others. Bob observed that one number usually differs from the others in evenness. Help Bob — to check his answers, he needs a program that among the given numbers finds one that is different in evenness, and return a position of this number.

!Keep in mind that your task is to help Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)

Examples :

iqTest("2 4 7 8 10") => 3 // Third number is odd, while the rest of the numbers are even

iqTest("1 2 1 1") => 2 // Second number is even, while the rest of the numbers are odd 
*/

function iqTest(numbers) {
  // Split the string by white space and value the index be 1||0 to see if it's even or odd
  const nums = numbers.split(" ").map((x) => x % 2);
  // Get the total sum of nums.
  //   If it's greater than 1, then there are more odds than even
  //   If it is 1, then there are more evens than odds
  const sum = nums.reduce((a, b) => a + b);
  // Target = 0 if sum > 1 (finding the even out of the odds)
  // Target = 1 if sum == 1 (finding the odd out of the evens)
  const target = sum > 1 ? 0 : 1;
  // Find the index the different number
  return nums.indexOf(target) + 1;
}
