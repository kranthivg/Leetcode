// O(M+N) approach binary search
var searchMatrix = function (matrix, target) {
  const m = matrix.length
  const n = matrix[0].length
  let left = 0,
    right = n - 1
  while (left < m && right >= 0) {
    if (matrix[left][right] === target) return true
    if (matrix[left][right] > target) right -= 1
    else left += 1
  }
  return false
}
