var firstMissingPositive = function (nums) {
  let obj = {},
    result = 1
  for (let num in nums) {
    if (!obj.hasOwnProperty(nums[num])) {
      obj[nums[num]] = nums[num]
    }
  }
  for (let num in obj) {
    if (obj[num] === result) {
      result += 1
    }
  }
  return result
}
