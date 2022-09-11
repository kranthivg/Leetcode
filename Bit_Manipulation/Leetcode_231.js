var isPowerOfTwo = function (n) {
  // if(n<=0) return false
  // if(n===2||n===1) return true
  // if(n%2===0) return isPowerOfTwo(n/2)
  // if(n%2!==0) return false
  let count = 0
  while (n > 0) {
    if (n & 1) count += 1
    n = n >>> 1
  }
  if (count === 1) {
    return true
  } else {
    return false
  }
}
