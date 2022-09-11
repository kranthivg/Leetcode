// Used 2 pointer approach on the sorted input.
var twoSum = function (numbers, target) {
  let left = 0,
    right = numbers.length - 1
  while (left < right) {
    if (numbers[left] + numbers[right] > target) {
      right -= 1
    } else if (numbers[left] + numbers[right] < target) {
      left += 1
    } else {
      return [left + 1, right + 1]
    }
  }
}
