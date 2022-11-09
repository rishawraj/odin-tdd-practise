function ceasorCipher(string, shift = 0) {
  if (shift > 26) return "invalid shift!";

  let arr = string.split("");
  let cipher = [];

  for (let i = 0; i < arr.length; i++) {
    let charCode = arr[i].charCodeAt(0);

    if (charCode + shift > 122 && charCode >= 97) {
      charCode = charCode - 26;
    }

    if (charCode + shift > 90 && charCode <= 90) {
      charCode = charCode - 26;
    }

    cipher[i] = String.fromCharCode(charCode + shift);

    if ((charCode < 65 && charCode < 90) || (charCode < 97 && charCode > 122)) {
      cipher[i] = string[i];
    }
  }

  return cipher.join("");
}

export { ceasorCipher };
