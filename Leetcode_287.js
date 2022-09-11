var findDuplicate = function (nums) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    if (!obj.hasOwnProperty(nums[i])) {
      obj[nums[i]] = 1
    } else {
      return nums[i]
    }
  }
}
