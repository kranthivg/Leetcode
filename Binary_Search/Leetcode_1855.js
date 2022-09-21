// Time complexity using Binary Search: O(NlogN).
var maxDistance = function (nums1, nums2) {
  let maxPos = 0
  for (let i = 0; i < nums1.length; i++) {
    let pos = binarySearch(nums2, nums1[i])
    pos - i > maxPos ? (maxPos = pos - i) : maxPos
  }
  return maxPos
}
function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2)
    if (nums[mid] >= target) left = mid
    else right = mid - 1
  }
  return left
}

//Time Complexity using 2 pointers. O(N).
var maxDistance = function (nums1, nums2) {
  let left = 0,
    right = 0,
    maxPos = 0
  while (left <= nums1.length && right <= nums2.length) {
    if (nums1[left] <= nums2[right]) {
      if (right - left > maxPos) maxPos = right - left
      right++
    } else {
      left++
    }
  }
  return maxPos
}
