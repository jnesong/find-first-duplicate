
// function findFirstDuplicate(arr) {
//   for (let i= arr.length-1 ; i > 0 ; i--) {
//     let x = arr[i]
//     function checkDup (num) {
//       return num.indexOf !== x.indexOf && num === x
//     }
//     if (y = arr.find(checkDup)) 
//     {return y}
//   }
//  return -1
// }

//I : array
//O : either -1 or the first dupe
//C: only return the first dupe, not a later dupe, if no dupes return -1
//E: empty array, return -1
//Time complexity: O(n)
// Space complexity: O(n)

function findFirstDuplicate(arr) {
  let map = {}
  for (let i=0 ; i < arr.length ; i++){
    if (map[arr[i]]) {
      return arr[i]
    } else {
      map[arr[i]] = 1
    }
  }

  return -1

}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: hello");
  console.log("=>", findFirstDuplicate([2, 1, 3, "hello", "hi", "hello", 1]))

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// take first value, check if any values after match
// take 2, check if any 2s after THEN take 1, check if any 1s after, THEN take 3 and check if any 3s after... 
// And a written explanation of your solution


// newObj = { key1: "value1", key2: "value2", key3: "value3"}
// console.log(newObj.key3)