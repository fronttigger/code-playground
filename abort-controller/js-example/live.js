const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

const $ = (selector) => document.querySelector(selector)

document.addEventListener('DOMContentLoaded', () => {
  $('.fetch-button').addEventListener('click', getPostsData)
})

// 특정 시간 이후 중단 되도록 처리
async function getPostsData() {
  try {
    const response = await fetch(FETCH_URL)
    const posts = await response.json()

    drawPosts(posts)
  } catch (error) {
    alert(error)
    exception()
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
