function analyzeArray(arr) {
  let length = arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let average = arr.reduce((c, t) => c + t, 0) / length;

  return { average, min, max, length };
}

export { analyzeArray };
