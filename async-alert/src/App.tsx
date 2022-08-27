import './App.css'

import { useAlert } from './contexts/alert'

function App() {
  const { openAlert } = useAlert()

  return (
    <div className='App'>
      <button
        onClick={() => {
          openAlert({
            title: '짜잔',
            description: '내용입니다',
            buttonText: '끝내라',
            onButtonClick: () => {
              window.alert('클릭')
            },
          })
        }}
      >
        클릭
      </button>
    </div>
  )
}

export default App
