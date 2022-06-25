import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

function App() {
  // abortController ref로 초기화
  const abortController = useRef(null)
  const [posts, setPosts] = useState([])

  async function getPostsData() {
    // AbortController 할당
    abortController.current = new AbortController()
    // abortSignal 선언
    const { signal } = abortController.current

    try {
      // fetch API에 signal 선언
      const response = await fetch(FETCH_URL, {
        signal,
      })
      const posts = await response.json()

      setPosts(posts)
    } catch (error) {
      alert(error)
    }
  }

  // 버튼 클릭시 요청 중단
  const handleCancelClick = () => {
    abortController.current && abortController.current.abort()
  }

  useEffect(() => {
    getPostsData()

    // 컴포넌트 이탈시 요청 중단
    return () => abortController.current && abortController.current.abort()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={handleCancelClick}>취소</button>
        <Link to='/getout'>다른 화면으로 이동</Link>
        <ul>
          {posts.slice(0, 20).map((post) => (
            <li style={{ color: 'black' }} key={post.id}>
              {post.title}
            </li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
