class LinkedNode<T> {
  next: LinkedNode<T> | null | undefined

  constructor(public data: T) {
    this.data = data
    this.next = null
  }
}

class LinkedList<T> {
  head: LinkedNode<T> | null | undefined
  size: number

  constructor() {
    this.head = null
    this.size = 0
  }

  // 모든 데이터를 출력
  printAll() {
    let currentNode = this.head
    let printText = '['

    while (currentNode !== null) {
      printText += currentNode?.data
      currentNode = currentNode?.next

      if (currentNode !== null) {
        printText += ', '
      }
    }

    printText += ']'

    console.log(printText)
  }

  // 모든 데이터를 제거
  clear() {
    this.head = null
    this.size = 0
  }

  // 특정 인덱스에 데이터를 삽입
  insertAt(index: number, data: T) {
    // 예외 처리
    if (index > this.size || index < 0) {
      throw new Error('삽입하려는 순서보다 리스트의 크기가 작습니다.')
    }

    // 노드 생성
    const newNode = new LinkedNode(data)

    // 노드가 head 일 때
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      // 노드가 중간 어딘가 일 때
      let currentNode = this.head

      for (let i = 0; i < index - 1; i += 1) {
        currentNode = currentNode?.next
      }

      // 새로 추가한 노드에 기존 노드 다음 연결
      newNode.next = currentNode?.next
      // 새로 추가한 노드 연결
      currentNode!.next = newNode
    }

    this.size += 1
  }

  // 마지막 인덱스에 데이터를 삽입
  insertLast(data: T) {
    // 노드 생성
    const newNode = new LinkedNode(data)

    // 첫 노드일 떄
    if (this.size === 0) {
      this.head = newNode
    } else {
      // 1개 이상의 노드 일 떄
      let currentNode = this.head

      for (let i = 0; i < this.size; i += 1) {
        // 마지막 노드 일 때
        if (!currentNode?.next) {
          currentNode!.next = newNode
        } else {
          currentNode = currentNode?.next
        }
      }
    }

    this.size += 1
  }

  // 특정 인덱스에 있는 노드를 삭제
  deleteAt(index: number) {
    // 예외 처리
    if (index > this.size || index < 0) {
      throw new Error('삭제하려는 인덱스가 없습니다.')
    }

    let currentNode = this.head

    if (index === 0) {
      this.head = this.head?.next
      this.size -= 1
    } else {
      for (let i = 0; i < index - 1; i += 1) {
        currentNode = currentNode?.next
      }

      currentNode!.next = currentNode?.next?.next
      this.size -= 1
    }
  }

  // 마지막 노드를 삭제
  deleteLast() {
    this.deleteAt(this.size - 1)
  }

  // 특정 인덱스에 있는 노드 조회
  getNodeAt(index: number) {
    if (index >= this.size || index < 0) {
      throw new Error('조회할 인덱스가 없습니다.')
    }

    let currentNode = this.head

    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode?.next
    }

    return currentNode
  }
}

export default LinkedList
