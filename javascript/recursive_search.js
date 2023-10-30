function recursiveSearch(arr, target) {
  // type your code here
  if (arr.length > 0) {
    if (arr[0] === target) {
      return true;
    }
    arr.shift()
    return recursiveSearch(arr, target);
  }
  else return false;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: true");
  console.log("=>", recursiveSearch([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", recursiveSearch([3, 2, 1], 4));
}

module.exports = recursiveSearch;

// Please add your pseudocode to this file
/**
 * another kind of awkward problem, where the obvious solution would be to just call it
 * iteratively since searching arrays is set up so well for that
 * anyway,
 * given an array and a target value
 * test the first value in the array with the target
 * if the same, return true
 * if not, repeat with the array - that value (remove first value)
 */
// And a written explanation of your solution
