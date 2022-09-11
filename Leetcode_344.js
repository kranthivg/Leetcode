var reverseString = function (s) {
  // if (s.length===1){
  //     return s
  // }
  // return s[s.length-1]+ reverseString(s.slice(0,s.length-1))
  if (s.length == 0) {
    return
  }
  var temp = s.shift()
  reverseString(s)
  s.push(temp)
}
