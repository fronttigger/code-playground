/**
 * @title
 * throttleByrAF
 *
 * @description
 * requestAnimationFrame을 사용하여 setTimeout이 처리되는 Task Queue보다 우선순위가 높게 처리가 되어 실행 시간을 더 보장할 수 있다.
 * 이벤트가 발생할 때 requestAnimationFrame 콜백이 Animation Frame으로 들어가 처리된다.
 */
function throttleByrAF(callback: (...args: any) => void) {
  let isWaiting = false

  return function (this: any, ...args: any) {
    if (!isWaiting) {
      window.requestAnimationFrame(() => {
        callback.apply(this, args)
        isWaiting = false
      })

      isWaiting = true
    }
  }
}

export default throttleByrAF
