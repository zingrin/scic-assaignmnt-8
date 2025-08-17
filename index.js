// Problem 1: Reverse a String

function reverseString(str) {
let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("Problem 1:", reverseString("hello"));
// Problem 2: Count Vowels in a String

function countVowels(str) {
let vowels = "aeiou";
  let count = 0;
  str = str.toLowerCase();
  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}
console.log("Problem 2:", countVowels("programming")); 

// Problem 3: Check for Palindrome

function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
console.log("Problem 3:", isPalindrome("madam")); 
console.log("Problem 3:", isPalindrome("hello")); 


// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) {
      max = num;
    }
  }
  return max;
}
console.log("Problem 4:", findMax([5, 1, 9, 3])); 




// Problem 5: Remove Duplicates from an Array

// Problem 6: Sum of All Numbers in an Array


// Problem 7: Find Even Numbers in an Array


// Problem 8: Capitalize First Letter of Each Word


// Problem 9: Find the Factorial of a Number


// Problem 10: PingPong Challenge
