//
var checkIfExist = function (arr) {
  let res = false
  arr = arr.sort((a, b) => a - b)
  for (let num in arr) {
    res = binarySearch(arr, 2 * arr[num], num)
    if (res === true) return res
  }
  return res
}
function binarySearch(arr, target, m) {
  let left = 0,
    right = arr.length - 1,
    mid = 0
  while (left < right) {
    mid = left + Math.floor((right - left) / 2)
    if (arr[mid] >= target) right = mid
    else left = mid + 1
  }
  if (target == 0 && left == m) return false
  return arr[left] === target ? true : false
}

//
var checkIfExist = function (arr) {
  const mySet = new Set()
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i] / 2) || mySet.has(arr[i] * 2)) return true

    mySet.add(arr[i])
  }
  return false
}
