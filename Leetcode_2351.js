var repeatedCharacter = function (s) {
  let obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj.hasOwnProperty(s[i])) {
      return s[i]
    } else {
      obj[s[i]] = true
    }
  }
}
