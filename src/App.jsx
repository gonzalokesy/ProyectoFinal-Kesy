import NavBar from './components/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer.jsx'

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje='Este es un mensaje enviado por props' />
    </>
  )
}

export default App
