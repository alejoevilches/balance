import { Card } from "./Card"
import "./Notes.css";
import { useNotesStore } from "../store/useNotesStore";
import { useState } from "react";
import { type Note } from "../types/types";
import { Modal } from "./Modal";
import { Details } from "./Details";

interface NotesState{
  selectedNote:Note | null,
  modal:boolean
}

export function Notes(){
  const {notes}=useNotesStore()
  const [state, setState] = useState<NotesState>({
    selectedNote: null,
    modal: false
  });
  const handleClick=(note:Note)=>{
    setState({
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
  return (
    <section className="cardContainer">
      {notes.map(note=>{
        return (
          <Card key={note.id} el={note} onClick={()=>handleClick(note)}/>
        )
      })}
      {state.modal && state.selectedNote &&
        <Modal handler={handleModal}>
          <Details el={state.selectedNote} />
        </Modal>
      }
    </section>
  )
}