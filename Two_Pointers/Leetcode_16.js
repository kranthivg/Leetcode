var threeSumClosest = function (nums, target) {
  let res = Infinity,
    out = 0
  nums = nums.sort((a, b) => a - b)
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }
    let left = i + 1,
      right = nums.length - 1
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if (Math.abs(target - sum) < res) {
        res = Math.abs(target - sum)
        out = sum
      }
      if (sum > target) {
        right--
      } else if (sum < target) {
        left++
      } else if (sum === target) {
        out = sum
        i = nums.length - 2
        break
      }
    }
  }
  return out
}
