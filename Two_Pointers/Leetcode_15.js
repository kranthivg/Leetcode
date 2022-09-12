// 3Sum problem - 2 pointers approach
// Time-O(n*n);space=O(1)
var threeSum = function (nums) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let threeSum = nums[i] + nums[left] + nums[right]
      if (threeSum > 0) {
        right -= 1
      } else if (threeSum < 0) {
        left += 1
      } else {
        res.push([nums[i], nums[left], nums[right]])
        left += 1
        while (nums[left] === nums[left - 1] && left < right) {
          left += 1
        }
      }
    }
  }
  return res
}
