import { Card } from "./Card"
import "./Notes.css";
import { useNotesStore } from "../store/useNotesStore";
import { useState } from "react";
import { type Note } from "../types/types";
import { Modal } from "./Modal";
import { Details } from "./Details";
import { Pagination } from "./Pagination";

interface NotesState{
  selectedNote:Note | null,
  modal:boolean
  notesPerPage:number,
  currentPage:number
}

export function Notes(){
  const {notes}=useNotesStore()
  const [state, setState] = useState<NotesState>({
    notesPerPage:9,
    selectedNote: null,
    modal: false,
    currentPage:1
  });
  const handleClick=(note:Note)=>{
    setState({
      ...state,
      modal:true,
      selectedNote:note
    })
  }
  const handleModal=()=>{
    setState({
      ...state,
      modal:false
    })
  }

  const handlePages=(page:number)=>{
    setState({
      ...state,
      currentPage:page
    })
  }

  const paginationLastIndex=state.currentPage * state.notesPerPage 
  const paginationFirstIndex=paginationLastIndex-state.notesPerPage
  const paginatedNotes=notes.slice(paginationFirstIndex,paginationLastIndex);
  const totalPages=Math.ceil(notes.length/state.notesPerPage)
  return (
    <>
      <section className="cardContainer">
        {paginatedNotes.map(note=>{
          return (
            <Card key={note.id} el={note} onClick={()=>handleClick(note)}/>
          )
        })}
      </section>
      <Pagination setCurrentPage={handlePages} currentPage={state.currentPage} totalPages={totalPages} />
      {state.modal && state.selectedNote &&
        <Modal handler={handleModal}>
          <Details el={state.selectedNote} onClick={handleModal} />
        </Modal>
      }
    </>
  )
}