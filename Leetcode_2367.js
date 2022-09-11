var arithmeticTriplets = function (nums, diff) {
  let first = 0,
    second = 0,
    count = 0
  for (let i = 0; i < nums.length - 1; i++) {
    let whole = false,
      semi = false
    first = nums[i] + diff
    second = first + diff
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === first) {
        semi = true
      }
      if (semi === true && nums[j] === second) {
        whole = true
      }
    }
    if (whole === true) {
      count += 1
    }
  }
  return count
}
