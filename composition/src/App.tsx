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
      >
        <Dialog.Title>안녕하세요!!</Dialog.Title>
        <Dialog.Description>저는 김준형입니다.</Dialog.Description>
      </Dialog>
    </>
  )
}

export default App
