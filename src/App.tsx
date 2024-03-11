import './App.css'
import { AddButton } from './components/AddButton'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Notes } from './components/Notes'
import { NewNote } from './components/NewNote'

interface AppState{
  isModalOpen:boolean
} 

export function App() {
  const [modal, setModal]=useState<AppState["isModalOpen"]>(false)
  const handleModal=()=>{
    setModal(!modal)
  }

  return (
    <main>
      <Navbar />
      <Notes />
      <AddButton handler={handleModal} />
      {modal && <NewNote handler={handleModal} />}
    </main>
  )
}
