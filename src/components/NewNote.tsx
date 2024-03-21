import { Note } from "../types/types";
import { Modal } from "./Modal";
import { v4 as uuidv4 } from 'uuid';
import "./NewNote.css"
import { useNotesStore } from "../store/useNotesStore";

interface NewNoteProps{
  handler:()=>void;
}

export function NewNote({handler}: NewNoteProps){
  const starsRating=[1,2,3,4,5]
  const {addToNotes}=useNotesStore();
  const getDate=()=>{
    const timestamp=new Date()
    const year=timestamp.getFullYear()
    const month=timestamp.getMonth()
    const day=timestamp.getDate()
    return `${day}/${month}/${year}`
    
  }

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data=new FormData(e.target as HTMLFormElement)
    const tagsFromDataValue = data.get("tags") as string;
    const formattedTags = tagsFromDataValue ? tagsFromDataValue.split(",") : [];
    const noteRating=data.get("rating")
    const rating: number = noteRating !== null ? +noteRating : 0;
    getDate();
    const note:Note={
      id:uuidv4(),
      rating:rating,
      title:data.get("title") as string,
      tags:formattedTags,
      content:data.get("note") as string,
      date:getDate()
    }
    if (note.rating===0 || note.title==="" || note.content==="" || note.tags.length === 0){
      return alert("Todos los campos son obligatorios. De esta forma, Balance puede hacer un mejor seguimiento de tu estado de animo")
    }
    console.log(note)
    addToNotes(note)
    return handler()
  }

  return (
    <Modal handler={handler}>
      <section className="input-container">
        <h2>Agregar nueva nota</h2>
        <form onSubmit={handleSubmit}>
            <p>¿Como te sentís hoy?</p>
            <div className="stars-container">
            {starsRating.map(n=>{
              return (
                <div key={n}>
                  <input type="radio" className="star-input" name="rating" id={`star${n}`} value={n} />
                  <label htmlFor={`star${n}`}>★</label>
                </div>
              )
            })}
          </div>
          <label htmlFor="title">Dale un titulo a tu entrada</label>
          <input type="text" name="title" id="title" />
          <label htmlFor="tags">Ingresá palabras claves para definir tus emociones (separalas con una coma)</label>
          <input type="text" name="tags" id="tags" />
          <label htmlFor="note">Ahora sí, sentite libre de escribir como te sentis</label>
          <textarea id="note" name="note" />
          <button type="submit" className="submit">Enviar nota</button>
        </form>
      </section>
    </Modal>
  )
}