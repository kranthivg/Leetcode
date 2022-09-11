var reverseList = function (head) {
  let prev = null,
    current = head
  while (current !== null) {
    const nextPointer = current.next
    current.next = prev
    prev = current
    current = nextPointer
  }
  return prev
}
