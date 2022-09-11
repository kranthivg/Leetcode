var guessNumber = function (n) {
  let left = 1,
    right = n
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (guess(mid) <= 0) right = mid
    else left = mid + 1
  }
  return left
}
