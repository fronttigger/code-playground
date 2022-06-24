// 네트워크 요청을 취소
// 1. 너무 오래 걸린다.
// 2. 클라이언트가 다른 작업을 진행한다.
// 3. 개발단에서 특정 시간 이후 다른 요청을 하기 위해 임의로 취소한다.

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

const $ = (selector) => document.querySelector(selector)

// abortController
const abortController = new AbortController()
const { signal } = abortController

document.addEventListener('DOMContentLoaded', () => {
  $('.fetch-button').addEventListener('click', getPostsData)
})

async function getPostsData() {
  const timer = setTimeout(() => {
    abortController.abort()
    console.log('abort')
  }, 1000)

  try {
    const response = await fetch(FETCH_URL, { signal })
    const data = await response.json()
    clearTimeout(timer)

    console.log('data', data)

    return data
  } catch (error) {
    alert(error)
  }
}
