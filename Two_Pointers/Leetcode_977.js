var sortedSquares = function (nums) {
  let left = 0,
    right = nums.length - 1
  const output = []
  while (left <= right) {
    if (Math.abs(nums[left]) > Math.abs(nums[right])) {
      output.push(Math.pow(nums[left], 2))
      left += 1
    } else {
      output.push(Math.pow(nums[right], 2))
      right -= 1
    }
  }
  return output.reverse()
}
