import React from 'react'
import './App.css'

import Skeleton from './skeleton'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ width: 40, height: 40 }}>
          <Skeleton variant='circular' />
          <div style={{ width: 200, height: 100, marginTop: 10 }}>
            <Skeleton variant='rectangular' />
          </div>
          <div style={{ width: 140, height: 14, marginTop: 10 }}>
            <Skeleton variant='text' />
          </div>
          <div style={{ width: 100, height: 14, marginTop: 5 }}>
            <Skeleton variant='text' />
          </div>
        </div>
      </header>
    </div>
  )
}

export default App
