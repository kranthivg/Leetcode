var hammingWeight = function (n) {
  let count = 0
  while (n > 0) {
    if (n % 2 == 1) count += 1
    n = n >>> 1
  }
  return count
}
