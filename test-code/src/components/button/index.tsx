import { ButtonHTMLAttributes, PropsWithChildren } from 'react'

function Button({
  children,
  ...props
}: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>) {
  return <button {...props}>{children}</button>
}

export default Button
