import LinkedList from './index'

describe('LinkedList', () => {
  test('LinkedList를 생성하면 빈 리스트가 생성된다.', () => {
    const linkedList = new LinkedList()

    expect(linkedList.size).toEqual(0)
  })

  describe('insertAt', () => {
    test('비어있는 연결리스트에 1 이상의 인덱스에 데이터를 삽입시 에러가 발생한다.', () => {
      const linkedList = new LinkedList()

      expect(() => linkedList.insertAt(2, '데이터')).toThrowError(
        new Error('삽입하려는 순서보다 리스트의 크기가 작습니다.')
      )
    })

    test('비어있는 연결리스트에 첫번째 인덱스에 "데이터" 문자열을 삽입하면 정상적으로 추가된다.', () => {
      const linkedList = new LinkedList()

      linkedList.insertAt(0, '데이터')

      expect(linkedList).toEqual({
        head: { data: '데이터', next: null },
        size: 1,
      })
    })
  })

  describe('insertLast', () => {
    test('비어있는 연결리스트에 데이터를 추가하면 첫번째 노드로 데이터가 추가되고 총 1개가 된다.', () => {
      const linkedList = new LinkedList()

      linkedList.insertLast('데이터')

      expect(linkedList).toEqual({
        head: { data: '데이터', next: null },
        size: 1,
      })
    })

    test('1개가 있는 연결리스트에 마지막 데이터를 추가하면 마지막 노드로 데이터가 추가되고 총 2개가 된다.', () => {
      const linkedList = new LinkedList()

      linkedList.insertLast('데이터')

      expect(linkedList).toEqual({
        head: { data: '데이터', next: null },
        size: 1,
      })

      linkedList.insertLast('데이터1')

      expect(linkedList).toEqual({
        head: {
          data: '데이터',
          next: { data: '데이터1', next: null },
        },
        size: 2,
      })
    })
  })

  describe('clear', () => {
    test('2개가 있는 연결리스트를 clear 함수를 호출하게 되면 데이터가 초기화된다.', () => {
      const linkedList = new LinkedList()

      linkedList.insertLast('데이터1')
      linkedList.insertLast('데이터2')

      expect(linkedList.head).not.toBeNull()
      expect(linkedList.size).toEqual(2)

      linkedList.clear()

      expect(linkedList.head).toBeNull()
      expect(linkedList.size).toEqual(0)
    })
  })
})
