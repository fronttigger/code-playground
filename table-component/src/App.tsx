import './App.css'
import { Table } from './components/Table'
import { TableProvider } from './components/Table/context'

function Row({ id, onClick }: { id: string; onClick?: (id: string) => void }) {
  return <div onClick={() => onClick?.(id)}>{id}</div>
}

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TableProvider>
          <Table onClick={(datas) => console.log('datas', datas)}>
            <Row id='1' />
            <Row id='2' />
            <Row id='3' />
          </Table>
        </TableProvider>
      </header>
    </div>
  )
}

export default App
