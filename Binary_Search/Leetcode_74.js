// O(M+N) complexity approach
/* */
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

// O(log(MN)) approach
var searchMatrix = function (matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false
  let row = 0,
    left = 0,
    right = matrix.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left + 1) / 2)
    if (matrix[mid][0] <= target) left = mid
    else right = mid - 1
  }
  row = left
  left = 0
  right = matrix[0].length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (matrix[row][mid] >= target) right = mid
    else left = mid + 1
  }
  return matrix[row][left] === target ? true : false
}
