var findTheDistanceValue = function (arr1, arr2, d) {
  arr2 = arr2.sort((a, b) => a - b)
  let count = 0
  for (let i = 0; i < arr1.length; i++) {
    let pos = myBinarySearch(arr2, arr1[i], d)
    if (pos === 0 && Math.abs(arr1[i] - arr2[pos]) > d) count += 1
    else if (
      Math.abs(arr1[i] - arr2[pos]) > d &&
      Math.abs(arr1[i] - arr2[pos - 1]) > d
    ) {
      count += 1
    }
  }
  return count
}
function myBinarySearch(arr, target, d) {
  let left = 0,
    right = arr.length - 1
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2)
    if (arr[mid] >= target) right = mid
    else left = mid + 1
  }
  return left
}
