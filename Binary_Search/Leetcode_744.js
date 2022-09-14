var nextGreatestLetter = function (letters, target) {
  let left = 0,
    right = letters.length
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (letters[mid] > target) right = mid
    else left = mid + 1
  }
  return letters[left % letters.length]
}
