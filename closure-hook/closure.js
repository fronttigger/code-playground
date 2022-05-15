const add = (function getAdd() {
  let foo = 1

  return function () {
    foo += 1

    return foo
  }
})()

console.log(add()) // 2
console.log(add()) // 3
console.log(add()) // 4
