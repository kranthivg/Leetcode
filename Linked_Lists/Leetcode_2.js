var addTwoNumbers = function (l1, l2) {
  const dummyHead = new ListNode()
  let tail = dummyHead

  let current1 = l1
  let current2 = l2
  let carry = 0
  while (current1 !== null || current2 !== null || carry !== 0) {
    const val1 = current1 === null ? 0 : current1.val
    const val2 = current2 === null ? 0 : current2.val
    const sum = val1 + val2 + carry
    carry = sum > 9 ? 1 : 0

    const digit = sum % 10
    tail.next = new ListNode(digit)
    tail = tail.next

    if (current1 !== null) {
      current1 = current1.next
    }
    if (current2 !== null) {
      current2 = current2.next
    }
  }
  return dummyHead.next
}
