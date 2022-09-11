var bitwiseComplement = function (n) {
  let res = 0,
    count = 0
  if (n === 0) {
    return n ^ 1
  }
  while (n > 0) {
    bit = (n >>> 0) & 1
    res |= (bit ^ 1) << count
    n = n >>> 1
    count += 1
  }
  return res >>> 0
}
