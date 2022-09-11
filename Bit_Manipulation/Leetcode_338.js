var countBits = function (n) {
  let result = [0]
  for (let i = 1; i < n + 1; i++) {
    let count = 0,
      num = i
    while (num > 0) {
      if (num % 2 == 1) count += 1
      num = num >>> 1
    }
    result.push(count)
  }
  return result
}
