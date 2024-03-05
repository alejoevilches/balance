import "./Card.css"
import { type Note } from "../types/types"

export function Card(el: Note){
  return (
    <article>
      <div className="card-header">
        <h3>{el.title}</h3>
        <p>{el.date}</p>
      </div>
      <p className="note-data">{el.content}</p>
      <section className="tags-container">
        {el.tags.map(tag=>{
          return (
            <div className={tag} />
          )
        })}
      </section>
    </article>
  )
}

<div className="angry-tag">Enojado</div>