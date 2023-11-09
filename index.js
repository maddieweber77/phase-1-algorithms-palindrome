
function isPalindrome(word) {
  let splitword = word.split('');

  // Make a copy of the array before reversing it
  let revArray = [...splitword].reverse();

  let revWord = revArray.join('');

  if (word === revWord) {
    return true;
  } else {
    return false;
  }
}

const testWord = "madam";
console.log(isPalindrome(testWord)); 
// Output: true

isPalindrome('abba');
isPalindrome('racecar');


/* 
Find length of characters of the string 
divide length of characters by two and round up
return the first half in an array and rearrange the array so that it is backwards
create an array of the last half of the string and compare to the first

*/

/*
  Add written explanation of your solution here
*/


// module.exports = isPalindrome;
