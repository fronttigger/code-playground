import { Children, ReactElement, cloneElement } from 'react'
import { useTableProvider } from './context'

interface TableProps {
  onClick: (datas: string[]) => void
  children: ReactElement[]
}

export const Table = ({ children, onClick }: TableProps) => {
  const childrenList = Children.toArray(children) as ReactElement[]
  const { datas, handleDatas } = useTableProvider()

  const handleOnClick = (id: string) => {
    handleDatas(id)

    onClick(datas)
  }

  return (
    <table>
      {Children.map(childrenList, (child) =>
        cloneElement(child, { ...child.props, onClick: handleOnClick })
      )}
    </table>
  )
}
