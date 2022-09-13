var trap = function (height) {
  let left = 0,
    right = height.length - 1
  let leftMax = 0,
    rightMax = 0
  let res = 0
  while (left < right) {
    // make sure height[left] is MIN(MAX(height[left]),MAX(height[right]))
    if (height[left] < height[right]) {
      if (height[left] > leftMax) leftMax = height[left]
      else res += leftMax - height[left]
      left++
    } else {
      if (height[right] > rightMax) rightMax = height[right]
      else res += rightMax - height[right]
      right--
    }
  }
  return res
}
