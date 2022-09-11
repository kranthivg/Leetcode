var isAnagram = function (s, t) {
  let objs = {}
  for (let char of s) {
    if (!(char in objs)) {
      objs[char] = 1
    } else {
      objs[char] += 1
    }
  }
  for (let char of t) {
    if (!(char in objs)) {
      return false
    } else {
      objs[char] -= 1
    }
  }
  for (let obj in objs) {
    if (objs[obj] > 0) {
      return false
    }
  }
  return true
}
