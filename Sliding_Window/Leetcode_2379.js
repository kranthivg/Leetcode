var minimumRecolors = function (blocks, k) {
  const arr = blocks.split('')
  console.log(arr)
  let windowCount = 0,
    minCount = Infinity,
    windowStart = 0
  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    if (arr[windowEnd] == 'W') {
      windowCount += 1
    }
    if (windowEnd >= k - 1) {
      if (windowCount < minCount) {
        minCount = windowCount
      }
      if (arr[windowStart] == 'W') {
        windowCount -= 1
      }
      windowStart += 1
    }
  }
  return minCount
}
