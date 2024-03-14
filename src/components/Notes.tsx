import { Card } from "./Card"
import "./Notes.css";
import { useNotesStore } from "../store/useNotesStore";

export function Notes(){
  const {notes}=useNotesStore()
  return (
    <section className="cardContainer">
      {notes.map(note=>{
        return (
          <Card key={note.id} el={note} />
        )
      })}
    </section>
  )
}