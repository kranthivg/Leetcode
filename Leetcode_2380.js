var secondsToRemoveOccurrences = function (s) {
  const arr = s.split('')
  let flag = 0,
    count = 0
  while (flag >= 0) {
    flag = -1
    let windowStart = 0,
      windowEnd = 1
    while (windowEnd < arr.length) {
      if (arr[windowStart] == '0' && arr[windowEnd] == '1') {
        flag = 1
        arr[windowStart] = '1'
        arr[windowEnd] = '0'
        windowStart += 2
        windowEnd += 2
      } else {
        windowStart += 1
        windowEnd += 1
      }
    }
    if (flag == 1) {
      count += 1
    } else {
      flag = -1
    }
  }
  return count
}
