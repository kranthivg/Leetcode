var zeroFilledSubarray = function (nums) {
  let left = 0,
    right = 0,
    count = 0,
    max = 0,
    maxoccur = 0
  for (let cur = 0; cur < nums.length; cur++) {
    if (nums[cur] !== 0) {
      if (count > 0) {
        max = sum(count)
      }
      maxoccur += max
      max = 0
      count = 0
    } else if (nums[cur] === 0) {
      count++
    }
  }
  if (count > 0) {
    max = sum(count)
  }
  maxoccur += max
  return maxoccur
}

let sum = function (count) {
  let res = 0
  for (let i = 1; i <= count; i++) {
    res += i
  }
  return res
}
