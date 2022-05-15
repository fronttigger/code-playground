const React = (function () {
  let hooks = []
  let idx = 0

  function useState(initVal) {
    const state = hooks[idx] || initVal
    const _idx = idx
    const setState = (newVal) => {
      hooks[_idx] = newVal
    }

    idx += 1

    return [state, setState]
  }

  function render(Component) {
    idx = 0
    const C = Component()
    C.render()

    return C
  }

  return { useState, render }
})()

function Component() {
  if (Math.random() > 0.5) {
    const [count, setCount] = React.useState(1) // ReferenceError: count is not defined
  }

  const [text, setText] = React.useState('apple')

  return {
    render: () => console.log({ count, text }),
    click: () => setCount(count + 1),
    type: (word) => setText(word),
  }
}

var App = React.render(Component) // { count: 1, text: 'apple' }
App.click()
var App = React.render(Component) // { count: 2, text: 'apple' }
App.type('pear')
var App = React.render(Component) // { count: 2, text: 'pear' }
