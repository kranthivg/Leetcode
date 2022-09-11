var containsDuplicate = function (nums) {
  let objs = {}
  for (let num of nums) {
    if (!objs.hasOwnProperty(num)) {
      objs[num] = true
    } else {
      return true
    }
  }
  return false
}
