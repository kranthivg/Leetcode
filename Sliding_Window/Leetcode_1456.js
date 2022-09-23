var maxVowels = function (s, k) {
  let left = 0,
    max = 0,
    count = 0
  let set = new Set()
  set.add('a')
  set.add('e')
  set.add('i')
  set.add('o')
  set.add('u')
  for (let right = 0; right < s.length; right++) {
    if (set.has(s[right])) count++
    if (right >= k - 1) {
      count > max ? (max = count) : max
      if (set.has(s[left])) count -= 1
      left += 1
    }
  }
  return max
}
