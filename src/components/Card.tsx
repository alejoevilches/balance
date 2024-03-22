import "./Card.css"
import { type Note } from "../types/types"
import { MouseEventHandler } from "react"

interface CardProps{
  el:Note,
  onClick?: MouseEventHandler<HTMLElement>
}

export function Card({el, onClick}:CardProps){
  const handleClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    event.stopPropagation();
    if (onClick) {
      onClick(event);
    }
  };
  return (
    <article className="card-container" onClick={handleClick}>
      <div className="card-header">
        <h3>{el.title}</h3>
        <h5>{el.date}</h5>
      </div>
      <p className="note-data">{el.content}</p>
      <section className="tags-container">
        {el.tags.map(tag=>{
          return (
            <div key={tag} className="tag">
                {tag}
            </div>
          )
        })}
      </section>
    </article>
  )
}