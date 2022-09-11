var searchRange = function (nums, target) {
  const firstPos = binarySearch(nums, target, true)
  const lastPos = binarySearch(nums, target, false)
  return [firstPos, lastPos]
}

function binarySearch(nums, target, isFirst) {
  let start = 0,
    end = nums.length - 1,
    mid = 0,
    result = -1
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2)
    if (nums[mid] < target) {
      start = mid + 1
    } else if (nums[mid] > target) {
      end = mid - 1
    } else if (nums[mid] === target && isFirst) {
      result = mid
      end = mid - 1
    } else if (nums[mid] === target && !isFirst) {
      result = mid
      start = mid + 1
    }
  }
  return result
}
