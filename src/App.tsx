import './App.css'
import { AddButton } from './components/AddButton'
import { Navbar } from './components/Navbar'
import { NewNote } from './components/NewNote'
import { Notes } from './components/Notes'

export function App() {
  return (
    <main>
      <Navbar />
      <Notes />
      <AddButton />
    </main>
  )
}
