var minSubArrayLen = function (target, nums) {
  let sum = 0,
    max = 100001,
    left = 0
  for (let right = 0; right < nums.length; right++) {
    sum += nums[right]
    if (sum >= target) {
      while (sum >= target) {
        if (right - left + 1 < max) max = right - left + 1
        sum -= nums[left]
        left++
      }
    }
  }
  return max < 100001 ? max : 0
}
