var middleNode = function (head) {
  let count = 0,
    current = head
  while (current !== null) {
    count += 1
    current = current.next
  }
  current = head
  let loop = Math.floor(count / 2) + 1
  console.log(loop)
  while (loop > 1) {
    current = current.next
    loop--
  }
  return current
}
