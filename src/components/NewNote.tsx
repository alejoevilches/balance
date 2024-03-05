import { Modal } from "./Modal";
import "./NewNote.css"

export function NewNote(){
  const starsRating=[1,2,3,4,5]

  const handleSubmit=(e: React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    const data=new FormData(e.target as HTMLFormElement)
    console.log(data.get("note"))
  }

  return (
    <Modal>
      <section className="input-container">
        <h2>Agregar nueva nota</h2>
        <form onSubmit={handleSubmit}>
            <p>¿Como te sentís hoy?</p>
            <div className="stars-container">
            {starsRating.map(n=>{
              return (
                <div>
                  <input type="radio" className="star-input" name="rating" id={`star${n}`} value={n} />
                  <label htmlFor={`star${n}`}>★</label>
                </div>
              )
            })}
          </div>
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