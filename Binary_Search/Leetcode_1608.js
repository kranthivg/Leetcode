//O(NlogN) compexity
var specialArray = function (nums) {
  let left = 0,
    right = nums.length + 1,
    m = 0
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    m = count(nums, mid)
    if (m === mid) return mid
    if (m <= mid) right = mid
    else left = mid + 1
  }

  return -1
}
function count(nums, m) {
  let count = 0
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= m) count++
  }
  return count
}
