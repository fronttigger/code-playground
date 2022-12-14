import Stack from './index'

describe('Stack', () => {
  test('Stack 생성하면 빈 리스트가 생성된다.', () => {
    const stack = new Stack()

    expect(stack.list.size).toEqual(0)
  })

  //   describe('insertAt', () => {
  //     test('비어있는 연결리스트에 1 이상의 인덱스에 데이터를 삽입시 에러가 발생한다.', () => {
  //       const stack = new Stack()
  //     })
  //   })
})
