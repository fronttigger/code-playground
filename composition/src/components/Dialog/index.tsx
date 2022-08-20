import ReactDOM from 'react-dom'
import styled from 'styled-components'

const DialogDimmed = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgba(0, 0, 0, 0.4);
`

const DialogContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 500px;
  padding: 40px;

  text-align: center;

  background-color: rgb(255, 255, 255);
  border-radius: 10px;
  box-shadow: 0 2px 3px 0 rgba(34, 36, 38, 0.15);
`

interface DialogProps {
  isOpen: boolean
  title: string
  buttonLabel: string
  onButtonClick: () => void
  onClose: () => void
}

function Dialog({
  isOpen,
  title,
  buttonLabel,
  onClose,
  onButtonClick,
}: DialogProps) {
  if (!isOpen) {
    return null
  }

  return ReactDOM.createPortal(
    <div>
      <DialogDimmed onClick={onClose} />
      <DialogContent>
        <span>{title}</span>
        <button onClick={onButtonClick}>{buttonLabel}</button>
      </DialogContent>
    </div>,
    document.getElementById('portal-root') as HTMLDivElement
  )
}

export default Dialog
