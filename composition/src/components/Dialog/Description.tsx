import { PropsWithChildren } from 'react'

import styled from 'styled-components'

const Description = styled.div``

interface DialogDescriptionProps {}

function DialogDescription({
  children,
}: PropsWithChildren<DialogDescriptionProps>) {
  return <Description>{children}</Description>
}

export default DialogDescription
