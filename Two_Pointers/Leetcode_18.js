//4Sum problem - 2Pointer approach
//There is recursion + 2Pointer approach that I need to learn
var fourSum = function (nums, target) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  for (let j = 0; j < nums.length; j++) {
    if (j > 0 && nums[j] === nums[j - 1]) {
      continue
    }
    for (let i = j + 1; i < nums.length; i++) {
      if (i > j + 1 && nums[i] === nums[i - 1]) {
        continue
      }
      let left = i + 1,
        right = nums.length - 1
      while (left < right) {
        let fourSum = nums[j] + nums[i] + nums[left] + nums[right]
        if (fourSum > target) {
          right -= 1
        } else if (fourSum < target) {
          left += 1
        } else {
          res.push([nums[j], nums[i], nums[left], nums[right]])
          left += 1
          while (nums[left] === nums[left - 1] && left < right) {
            left += 1
          }
        }
      }
    }
  }
  return res
}
