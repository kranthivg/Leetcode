var minBitFlips = function (start, goal) {
  let mask = start ^ goal,
    count = 0
  while (mask > 0) {
    if (mask & 1) {
      count += 1
    }
    mask = mask >>> 1
  }
  return count
}
