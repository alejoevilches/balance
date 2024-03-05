import {create} from "zustand"
import { Note } from "../types/types"

interface NotesState{
  notes: Array<Note>,
  addToNotes:(el:Note)=>void
}

const recoverNotes:()=>Array<Note>=()=>{
  const savedNotes=localStorage.getItem("notes")
  return savedNotes ? JSON.parse(savedNotes) : []
}

export const useNotesStore=create<NotesState>((set)=>({
  notes:recoverNotes(),

  addToNotes:(el:Note)=>set((state)=>{
    const {notes}=state;
    const newNotes=[...notes,el]
    return {notes:newNotes}
  })

}))