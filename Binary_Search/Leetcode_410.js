var splitArray = function (nums, m) {
  if (nums.length < m) {
    return -1
  }
  let end = sumOfArrayElements(nums)
  let start = Math.max(...nums)
  let minMax = end
  while (start <= end) {
    let mid = Math.floor((start + end) / 2)
    if (isValid(nums, m, mid)) {
      minMax = mid
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return minMax
}
function sumOfArrayElements(nums) {
  let sum = 0
  for (let num = 0; num < nums.length; num++) {
    sum += nums[num]
  }
  return sum
}
function isValid(nums, m, mid) {
  let sum = 0,
    noOfArrays = 1
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i]
    if (sum > mid) {
      noOfArrays += 1
      sum = nums[i]
    }
  }
  if (noOfArrays <= m) {
    return true
  } else {
    return false
  }
}
