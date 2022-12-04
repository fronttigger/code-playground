class LinkedNode<T> {
  next: null

  constructor(public data: T) {
    this.data = data
    this.next = null
  }
}

class LinkedList<T> {
  head: LinkedNode<T> | null
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }
}

export default LinkedList
