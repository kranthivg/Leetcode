var isPowerOfFour = function (n) {
  // if(n<=0) return false
  // if(n===1) return true
  // if(n%4===0) return isPowerOfFour(n/4)
  // if(n%4!==0) return false
  if (n < 1) {
    return false
  }
  while (n > 1) {
    n = n / 4
  }
  return n === 1
}
