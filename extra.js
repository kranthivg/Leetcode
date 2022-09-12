var fourSum = function (nums, target) {
  let res = []
  nums = nums.sort((a, b) => a - b)
  let l1 = 0,
    r1 = 1
  while (r1 < nums.length) {
    if (r1 > 1 && nums[r1] === nums[r1 - 1]) {
      r1++
      continue
    }
    if (l1 > 0 && nums[l1] === nums[l1 - 1]) {
      l1++
      continue
    }
    if (l1 === r1) {
      r1++
    }
    let l2 = r1 + 1,
      r2 = nums.length - 1
    while (l2 < r2) {
      let fourSum = nums[l1] + nums[r1] + nums[l2] + nums[r2]
      if (fourSum > target) {
        r2--
      } else if (fourSum < target) {
        l2++
      } else {
        res.push([nums[l1], nums[r1], nums[l2], nums[r2]])
        l2 += 1
        while (nums[l2] === nums[l2 - 1] && l2 < r2) {
          l2++
        }
      }
    }
    r1++
    l1++
  }
  return res
}
