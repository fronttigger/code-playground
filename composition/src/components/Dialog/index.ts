import Main from './Main'
import DialogTitle from './Title'
import DialogDescription from './Description'

const Dialog = Object.assign(Main, {
  Title: DialogTitle,
  Description: DialogDescription,
})

export default Dialog
