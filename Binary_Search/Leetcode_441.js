var arrangeCoins = function (n) {
  let left = 0,
    right = n + 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    let prod = ((mid + 1) * (mid + 2)) / 2
    if (prod > n) right = mid
    else left = mid + 1
  }
  return left
}
