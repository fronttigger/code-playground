import SwitchCase from './components/SwitchCase'
import './App.css'
import { useState } from 'react'

function App() {
  const [switchCase, setSwitchCase] = useState('a')

  return (
    <div className='App'>
      <header className='App-header'>
        <select
          value={switchCase}
          onChange={(e) => setSwitchCase(e.target.value)}
        >
          <option value='a'>a</option>
          <option value='b'>b</option>
          <option value='c'>c</option>
        </select>
        <SwitchCase
          value={switchCase}
          caseBy={{
            a: <div>a</div>,
            b: <div>b</div>,
            c: <div>c</div>,
          }}
          defaultComponent={<div>default</div>}
        />
      </header>
    </div>
  )
}

export default App
