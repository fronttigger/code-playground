import { useState } from 'react'
import './App.css'
import ErrorBoundary from './components/ErrorBoundary'

import Product from './components/Product'

function App() {
  const [productId, setProductId] = useState<string>('5')

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setProductId(e.target.value)
  }

  return (
    <div className='App'>
      <select value={productId} onChange={handleSelectChange}>
        <option value='5'>5</option>
        <option value='6'>6</option>
        <option value='error'>error</option>
      </select>
      <ErrorBoundary>
        <Product id={productId} />
      </ErrorBoundary>
    </div>
  )
}

export default App
