import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface TableContextProps {
  datas: string[]
  handleDatas: (id: string) => void
}

const TableContext = createContext<TableContextProps | undefined>(undefined)

export const TableProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [datas, setDatas] = useState<string[]>([])

  const handleDatas = useCallback(
    (id: string) => {
      if (datas.includes(id)) {
        setDatas((prev) => [...prev.filter((data) => data !== id)])
      } else {
        setDatas((prev) => [...prev, id])
      }
    },
    [datas]
  )

  const controls = useMemo(() => ({ datas, handleDatas }), [datas, handleDatas])

  return (
    <TableContext.Provider value={controls}>{children}</TableContext.Provider>
  )
}

export const useTableProvider = () => {
  const controls = useContext(TableContext)

  if (controls == null) {
    throw new Error('TableContext Provider를 감싸서 사용해주세요')
  }

  return controls
}
