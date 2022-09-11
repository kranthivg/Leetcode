var hasCycle = function (head) {
  const mySet = new Set()
  let current = head
  while (current !== null) {
    if (mySet.has(current)) {
      return true
    } else {
      mySet.add(current)
    }
    current = current.next
  }
  return false
}
