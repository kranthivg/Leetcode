var findComplement = function (num) {
  let temp = 1
  while (temp < num) temp |= temp << 1
  return num ^ temp
}
