//Used a map to store each element and search for compliment sum.
var twoSum = function (nums, target) {
  const prevNums = {}
  let complimentSum = 0
  for (let i = 0; i < nums.length; i++) {
    complimentSum = target - nums[i]
    if (!prevNums.hasOwnProperty(complimentSum)) {
      prevNums[nums[i]] = i
    } else {
      return [i, prevNums[complimentSum]]
    }
  }
  return [-1, -1]
}
