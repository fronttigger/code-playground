import { PropsWithChildren } from 'react'

import styled from 'styled-components'

const Title = styled.div``

interface DialogTitleProps {}

function DialogTitle({ children }: PropsWithChildren<DialogTitleProps>) {
  return <Title>{children}</Title>
}

export default DialogTitle
