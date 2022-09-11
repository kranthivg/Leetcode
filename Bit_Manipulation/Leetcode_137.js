var singleNumber = function (nums) {
  let x1 = 0,
    x2 = 0,
    mask = 0
  for (num in nums) {
    x2 ^= x1 & nums[num]
    x1 ^= nums[num]
    mask = ~(x2 & x1)
    x2 &= mask
    x1 &= mask
  }
  return x1
}
