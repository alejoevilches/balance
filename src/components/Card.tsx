import "./Card.css"
import { type Note } from "../types/types"

interface CardProps{
  el:Note,
}

export function Card({el}:CardProps){
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
            <div key={tag} className={tag}>
                {tag}
            </div>
          )
        })}
      </section>
    </article>
  )
}