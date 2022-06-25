const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

const $ = (selector) => document.querySelector(selector)

let abortController = null

document.addEventListener('DOMContentLoaded', () => {
  $('.fetch-button').addEventListener('click', getPostsData)
})

async function getPostsData() {
  // AbortController 할당
  abortController = new AbortController()
  // abortSignal 선언
  const { signal } = abortController

  const timer = setTimeout(() => {
    // 특정 ms 이후 요청을 수동으로 취소
    abortController.abort()
    console.log('abort')
  }, 100)

  try {
    // fetch API에 signal 선언
    const response = await fetch(FETCH_URL, { signal })
    const posts = await response.json()

    drawPosts(posts)
  } catch (error) {
    alert(error)
    exception()
  } finally {
    clearTimeout(timer)
    abortController = null
  }
}

function drawPosts(posts) {
  $('.list').innerHTML = posts
    .slice(0, 20)
    .map((post) => `<li>${post.title}</li>`)
    .join('')
}

function exception() {
  $('.list').innerHTML = '다시 요청해주세요'
}
