// MIN(MAX(height[l]),MAX(height[r]))*(r-l) is the amount of water
//that can be stored between l and r pointers.
var maxArea = function (height) {
  let res = 0
  let l = 0,
    r = height.length - 1
  while (l < r) {
    if (height[l] < height[r]) {
      height[l] * (r - l) > res ? (res = height[l] * (r - l)) : res
      l += 1
    } else {
      height[r] * (r - l) > res ? (res = height[r] * (r - l)) : res
      r -= 1
    }
  }
  return res
}
