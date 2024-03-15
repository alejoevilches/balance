import { useNotesStore } from "../store/useNotesStore"
import { Note } from "../types/types"
import "./Details.css"

export function Details(note:Note){
  const {notes}=useNotesStore()
  return (
    <section className="details-card">
      <div className="details-card-header">

      </div>
    </section>
  )
}