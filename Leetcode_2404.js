var mostFrequentEven = function (nums) {
  let obj = {},
    count = -1,
    key = -1
  for (let num in nums) {
    if (nums[num] % 2 == 0 && !obj.hasOwnProperty(nums[num])) {
      obj[nums[num]] = 1
    } else if (nums[num] % 2 == 0 && obj.hasOwnProperty(nums[num])) {
      obj[nums[num]] += 1
    }
  }
  for (let i in obj) {
    if (obj[i] > count) {
      count = obj[i]
      key = i
    }
  }
  return key
}
