// Problem 1: Reverse a String

function reverseString(str) {
let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log("Problem 1:", reverseString("hello"));