var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  return nums[left] === target ? left : -1
}
