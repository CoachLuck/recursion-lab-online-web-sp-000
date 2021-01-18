// Code your solution here!
function printString(s) {
  console.log(s[0]);
  if (s.length > 1) {
    let str = s.substring(1, s.length);
    printString(str);
  } else {
    return true;
  }
}

function reverseString(s) {
  return (s == "") ? "" : reverseString(s.substring(1)) + s[0];
}

function isPalindrome(s) {
  return s == reverseString(s);
}

function addUpTo(arr, idx) {
  if (idx == 0) {
    return arr[0];
  }

  return arr[idx] + addUpTo(arr, idx - 1);
}

function maxOf(arr) {
  if (arr.length == 1) {
      return arr[0];
  }

  if (arr[0] < arr[1]) {
    arr.shift();
  } else {
    arr.splice(1, 1);
  }

  return maxOf(arr)
}

function includesNumber(arr, num) {
  if (arr.length == 0) {
    return false;
  }

  if (arr[0] == num) {
    return true;
  }

  arr.shift();
  return includesNumber(arr, num);
}
