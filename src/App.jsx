import Nav from './components/Nav'
import {Outlet} from 'react-dom/client'

function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    </>
  )
}

export default App
