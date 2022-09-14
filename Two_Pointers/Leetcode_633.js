var judgeSquareSum = function (c) {
  const root = mySqrt(c)
  let left = 0,
    right = root
  while (left < right) {
    if (left * left + right * right === c) return true
    else if (left * left + right * right < c) left++
    else right--
  }
  return left * left + right * right === c ? true : false
}
function mySqrt(n) {
  let left = 0,
    right = n + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (mid * mid > n) right = mid
    else left = mid + 1
  }
  return left - 1
}
