var minimumOperations = function (nums) {
  let minNum = +Infinity,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    minNum = +Infinity
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== 0 && nums[j] < minNum) {
        minNum = nums[j]
      }
    }
    if (minNum > 0 && minNum !== Infinity) {
      count += 1
    }
    for (let k = 0; k < nums.length; k++) {
      if (nums[k] !== 0) {
        nums[k] -= minNum
      }
    }
  }
  console.log(nums)
  return count
}
