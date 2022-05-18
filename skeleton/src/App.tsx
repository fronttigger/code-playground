import React from 'react'
import './App.css'

import Skeleton from './skeleton'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div style={{ width: 210, height: 118 }}>
          <Skeleton variant='text' animation='wave' />
        </div>
      </header>
    </div>
  )
}

export default App
