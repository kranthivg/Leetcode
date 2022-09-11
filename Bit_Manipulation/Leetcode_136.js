var singleNumber = function (nums) {
  let result
  for (num in nums) {
    result = result ^ nums[num]
  }
  return result
}
