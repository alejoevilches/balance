import { Note } from "../types/types";
import "./Details.css";

interface DetailsProp{
  el:Note
  onClick:()=>void
}

export function Details({el, onClick}:DetailsProp){
  return (
    <article className="details-container">
      <section className="details-header">
        <h2>{el.title}</h2>
        <h3>{el.date}</h3>
      </section>
      <section className="details-main">
        <p>{el.content}</p>
        <div className="details-tags">
          {el.tags.map(tag=>{
            return ( <div key={tag} className="tag">{tag}</div> )
          })}
        </div>
      </section>
        <button onClick={onClick}>Aceptar</button>
    </article>
  )
}