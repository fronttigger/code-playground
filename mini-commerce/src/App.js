class App {
  constructor({ $target }) {
    this.$target = $target
    this.state = {
      isLoggedIn: Boolean(localStorage.getItem('Authorization')), // 로그인 여부
      items: [], // 장바구니
    }

    this.render()
  }

  setState(newState) {
    this.state = {
      ...this.state,
      ...newState,
    }
  }

  render() {
    // 화면 그려주기
    this.$target.innerHTML = `<div>커머스 화면</div>`
  }
}

export default App
