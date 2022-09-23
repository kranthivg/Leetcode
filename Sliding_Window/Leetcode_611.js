var triangleNumber = function (nums) {
  nums = nums.sort((a, b) => b - a)
  let count = 0
  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        count += right - left
        left += 1
      } else {
        right -= 1
      }
    }
  }
  return count
}
