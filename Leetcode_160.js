var getIntersectionNode = function (headA, headB) {
  const mySet = new Set()
  let currentA = headA
  let currentB = headB
  while (currentA !== null) {
    mySet.add(currentA)
    currentA = currentA.next
  }
  while (currentB !== null) {
    if (mySet.has(currentB)) {
      return currentB
    }
    currentB = currentB.next
  }
  return null
}
