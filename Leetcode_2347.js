var bestHand = function (ranks, suits) {
  let prev = 0,
    count = 0,
    max = -Infinity,
    obj = {}
  for (let i = 1; i < suits.length; i++) {
    if (suits[prev] == suits[i]) {
      count++
    }
    prev++
  }
  if (count === suits.length - 1) {
    return 'Flush'
  }
  for (let i = 0; i < ranks.length; i++) {
    if (!obj.hasOwnProperty(ranks[i])) {
      obj[ranks[i]] = 1
    } else if (obj.hasOwnProperty(ranks[i])) {
      obj[ranks[i]] += 1
    }
  }
  for (let num in obj) {
    if (obj[num] > max) {
      max = obj[num]
    }
  }
  if (max >= 3) {
    return 'Three of a Kind'
  }
  if (max === 2) {
    return 'Pair'
  }
  if (max === 1) {
    return 'High Card'
  }
}
