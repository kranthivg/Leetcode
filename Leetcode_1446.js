var maxPower = function (s) {
  let count = 0,
    max = 0,
    i = 0
  for (let j = 0; j < s.length; j++) {
    if (s[i] === s[j]) {
      count += 1
      if (count > max) {
        max = count
      }
    } else {
      i = j
      count = 1
    }
  }
  return max
}
