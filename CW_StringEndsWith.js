/* 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false 
*/

function solution(str, ending) {
  // .substring takes a start and end index
  //return str.substring(str.length - ending.length, str.length) == ending;

  // .substr takes a start index and length we want the substring to be
  //return str.substr( (str.length - ending.length), ending.length ) == ending;

  // .endWIth is more intuitive in the wording
  return str.endsWith(ending);
}
