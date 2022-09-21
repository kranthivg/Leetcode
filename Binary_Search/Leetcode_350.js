// 2 Pointer approach. Time: O(NlogN+MlogM)
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  let left = 0,
    right = 0,
    res = []
  while (left < nums1.length && right < nums2.length) {
    if (nums1[left] === nums2[right]) {
      res.push(nums2[right])
      left++
      right++
    } else if (nums1[left] > nums2[right]) {
      right++
    } else {
      left++
    }
  }
  return res
}

// Binary Search approach. Time O(NlogN+MlogM+NlogM)
var intersect = function (nums1, nums2) {
  nums1 = nums1.sort((a, b) => a - b)
  nums2 = nums2.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    if (binarySearch(nums2, nums1[i])) {
      res.push(nums1[i])
    }
  }
  return res
}

function binarySearch(nums, target) {
  let left = 0,
    right = nums.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (nums[mid] >= target) right = mid
    else left = mid + 1
  }
  if (nums[left] === target) {
    nums[left] = -1
    return true
  } else {
    return false
  }
}

//Hashmap approach. Time: O(N+M)
var intersect = function (nums1, nums2) {
  let map = {},
    res = []
  for (let num of nums1) {
    if (!map[num]) map[num] = 1
    else map[num] += 1
  }
  for (let num of nums2) {
    if (map[num] > 0) {
      res.push(num)
      map[num] -= 1
    }
  }
  return res
}
