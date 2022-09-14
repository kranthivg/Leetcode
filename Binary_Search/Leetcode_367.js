var isPerfectSquare = function (num) {
  let left = 0,
    right = num + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (mid * mid >= num) right = mid
    else left = mid + 1
  }
  return left * left === num ? true : false
}
