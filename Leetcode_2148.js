var countElements = function (nums) {
  let min = Infinity,
    max = -Infinity,
    count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) max = nums[i]
    if (nums[i] < min) min = nums[i]
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > min && nums[i] < max) count += 1
  }
  return count
}
