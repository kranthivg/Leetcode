var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    while (nums[left] == nums[left + 1]) left++
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] <= nums[right]) right = mid
    else left = mid + 1
  }
  return nums[left]
}
