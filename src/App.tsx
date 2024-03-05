import './App.css'
import { AddButton } from './components/AddButton'
import { Navbar } from './components/Navbar'
import { Notes } from './components/Notes'

function App() {
  return (
    <main>
      <Navbar />
      <Notes />
      <AddButton />
    </main>
  )
}

export default App
