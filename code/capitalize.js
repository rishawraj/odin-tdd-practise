function capitalize(string) {
  let firstLetter = string.match(/^[a-zA-Z]/);

  return string.replace(
    firstLetter,
    String.fromCharCode(firstLetter[0].charCodeAt(0) - 32)
  );
}

export default capitalize;
