var maxDistance = function (colors) {
  ;(left = 0), (right = colors.length - 1), (maxPos1 = 0), (maxPos2 = 0)
  while (left < right) {
    if (colors[left] !== colors[right] && right - left > maxPos1) {
      maxPos1 = right - left
    }
    right--
  }
  left = 0
  right = colors.length - 1
  while (left < right) {
    if (colors[left] !== colors[right] && right - left > maxPos2) {
      maxPos2 = right - left
    }
    left++
  }
  return maxPos1 > maxPos2 ? maxPos1 : maxPos2
}
ß
