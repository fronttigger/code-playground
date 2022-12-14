import LinkedList from '../LinkedList'

class Stack<T> {
  list: LinkedList<T>

  constructor() {
    this.list = new LinkedList()
  }

  push(data: T) {
    this.list.insertAt(0, data)
  }
}

export default Stack
