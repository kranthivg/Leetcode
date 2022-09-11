var topKFrequent = function (nums, k) {
  let obj = {},
    res = []
  for (num in nums) {
    if (!obj.hasOwnProperty(nums[num])) {
      obj[nums[num]] = 1
    } else {
      obj[nums[num]] += 1
    }
  }
  while (res.length !== k) {
    let count = -1,
      key = -1
    for (let i in obj) {
      if (obj[i] > count) {
        count = obj[i]
        key = i
      }
    }
    res.push(key)
    delete obj[key]
  }
  return res
}
