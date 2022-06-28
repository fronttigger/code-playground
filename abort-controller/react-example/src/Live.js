import React, { useEffect, useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

// 화면 이탈 및 버튼 클릭시
function App() {
  const [posts, setPosts] = useState([])

  async function getPostsData() {
    try {
      const response = await fetch(FETCH_URL)
      const posts = await response.json()

      setPosts(posts)
    } catch (error) {
      alert(error)
    }
  }

  const handleCancelClick = () => {}

  useEffect(() => {
    getPostsData()
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
