function reverseString(str) {
  let reversedString = str.split("").reverse().join("")
  return reversedString;
}

reverseString("hello");