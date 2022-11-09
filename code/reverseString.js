function reverseString(string) {
  let arr = string.split("");
  let reversed = arr.reverse();
  return reversed.join("");
}

export default reverseString;
