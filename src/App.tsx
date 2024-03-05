import './App.css'
import { AddButton } from './components/AddButton'
import { Navbar } from './components/Navbar'
import { NewNote } from './components/NewNote'
import { Notes } from './components/Notes'

function App() {
  return (
    <main>
      <NewNote />
      <Navbar />
      <Notes />
      <AddButton />
    </main>
  )
}

export default App
