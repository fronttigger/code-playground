// 1. callback을 받아서 실행시킨다.
// 2. 최초 한 번만 callback을 실행시킨다.
// 3. 최초 실행 이후 setTimeout을 동작시킨다.
// 4. setTimeout 이후 callback을 동작시킨다.
// 5. setTimeout이 끝나기 전에 다시 이벤트를 동작시켰다면 무효화 시킨다.
// 6. 실행된 시간과 현재 시간을 비교하여 timeout이 0이 될 경우 바로 실행하도록 동작시킨다.

/**
 * @title
 * Throttle
 *
 * @description
 * 이벤트가 반복적으로 시행되는 경우 이벤트의 실제 반복 주기와 상관없이
 * 임의로 설정한 일정 시간 간격으로 콜백 함수의 실행을 보장합니다.
 */
function throttle(callback: (...args: any) => void, timeout: number = 1000) {
  let invokedTime: number = 0
  let timer: number = 0

  return function (this: any, ...args: any) {
    if (!invokedTime) {
      callback.apply(this, args)
      invokedTime = Date.now()
    } else {
      clearTimeout(timer)

      timer = window.setTimeout(() => {
        if (Date.now() - invokedTime >= timeout) {
          callback.apply(this, args)
          invokedTime = Date.now()
        }
      }, Math.max(timeout - (Date.now() - invokedTime), 0))
    }
  }
}

export default throttle
