//Create a map thet keeps track of all letters pf p string.
//Then use sliding window technique on s string to count the number of anagrams.

var findAnagrams = function (s, p) {
  let map = {},
    mapSize = 0
  for (let i = 0; i < p.length; i++) {
    if (!map.hasOwnProperty(p[i])) {
      map[p[i]] = 1
      mapSize += 1
    } else {
      map[p[i]] += 1
    }
  }
  let left = 0,
    res = []
  for (let right = 0; right < s.length; right++) {
    if (map.hasOwnProperty(s[right])) {
      map[s[right]] = map[s[right]] - 1
      if (map[s[right]] === 0) {
        mapSize -= 1
      }
    }
    if (right >= p.length - 1) {
      if (mapSize === 0) {
        res.push(left)
      }
      if (map.hasOwnProperty(s[left]) && map[s[left]] === 0) mapSize += 1
      map[s[left]] += 1
      left += 1
    }
  }
  return res
}
