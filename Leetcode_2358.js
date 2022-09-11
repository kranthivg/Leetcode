var maximumGroups = function (grades) {
  let count = 1
  let size = grades.length
  while ((count * (count + 1)) / 2 <= size) count += 1

  return --count
}
