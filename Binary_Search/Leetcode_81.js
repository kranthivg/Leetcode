var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    while (nums[left] == nums[left + 1]) left++
    while (nums[right] == nums[right - 1]) right--
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] <= nums[right]) right = mid
    else left = mid + 1
  }
  let result1 = binarySearch(nums, 0, left - 1, target)
  let result2 = binarySearch(nums, left, nums.length - 1, target)
  return result1 !== false ? result1 : result2
}

function binarySearch(nums, left, right, target) {
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  return nums[left] === target ? true : false
}
