import { useState } from 'react'

import Dialog from './components/Dialog'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  const handleDialogClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)}>Dialog 오픈</button>
      <Dialog
        isOpen={isOpen}
        title='타이틀'
        buttonLabel='버튼 레이블'
        onClose={handleDialogClose}
        onButtonClick={() => {}}
      />
    </>
  )
}

export default App
