import React, { useEffect, useRef } from 'react'
import './App.css'
import { Link } from 'react-router-dom'

const FETCH_URL = 'https://jsonplaceholder.typicode.com/posts'

function App() {
  const abortController = useRef(null)

  async function getPostsData() {
    try {
      abortController.current = new AbortController()

      const response = await fetch(FETCH_URL, {
        signal: abortController.current.signal,
      })
      const data = await response.json()

      return data
    } catch (error) {
      alert(error)
    }
  }

  const cancel = () => {
    abortController.current && abortController.current.abort()
  }

  useEffect(() => {
    getPostsData()

    return () => abortController.current && abortController.current.abort()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={cancel}>취소</button>
        <Link to='/hello'>다른 화면으로 이동</Link>
      </header>
    </div>
  )
}

export default App
