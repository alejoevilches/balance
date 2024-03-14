import { Note } from "../types/types";
import { Modal } from "./Modal";
import { useId } from "react";
import "./NewNote.css"
import { useNotesStore } from "../store/useNotesStore";

interface NewNoteProps{
  handler:()=>void;
}

export function NewNote({handler}: NewNoteProps){
  const starsRating=[1,2,3,4,5]
  const createId=useId();
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
    console.log(tagsFromDataValue);
    const formattedTags=tagsFromDataValue.split(",")
    const noteRating=data.get("rating")
    const rating: number = noteRating !== null ? +noteRating : 0;
    getDate();
    const note:Note={
      id:createId,
      rating:rating,
      title:data.get("title") as string,
      tags:formattedTags,
      content:data.get("note") as string,
      date:getDate()
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