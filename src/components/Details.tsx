import { Note } from "../types/types";

interface DetailsProp{
  el:Note
}

export function Details({el}:DetailsProp){
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
            return ( <div key={tag} className="tag"></div> )
          })}
        </div>
        <button>Aceptar</button>
      </section>
    </article>
  )
}