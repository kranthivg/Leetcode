var kWeakestRows = function (mat, k) {
  let temp = []
  let result = []
  let count = 0
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j <= mat[i].length; j++) {
      if (mat[i][j] === 1) {
        count++
      }
    }
    temp[i] = count
    count = 0
  }
  let sortTemp = [...temp]
  sortTemp = sortTemp.sort((a, b) => a - b)

  for (let i = 0; i < k; i++) {
    result.push(temp.indexOf(sortTemp[i]))
    temp[temp.indexOf(sortTemp[i])] = -1
  }

  return result
}
