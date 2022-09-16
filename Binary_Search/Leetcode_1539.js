// Linear O(N) approach
var findKthPositive = function (arr, k) {
  const end = arr[arr.length - 1] + k
  let obj = {}
  for (let i = 1; i <= end; i++) {
    obj[i] = true
  }

  for (let i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      delete obj[arr[i]]
    }
  }

  let count = 0
  for (let num in obj) {
    if (count === k - 1) {
      return num
    } else {
      count += 1
    }
  }
}
