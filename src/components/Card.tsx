import "./Card.css"

export function Card(){
  return (
    <article>
      <h3>Este es el titulo</h3>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore quae nostrum necessitatibus voluptas eius aliquid itaque maxime distinctio laudantium sapiente voluptates dolor laboriosam odit sit sint est eveniet similique assumenda, qui reiciendis. Non facilis quo, eius ipsam neque sunt impedit accusamus itaque mollitia vitae odio exercitationem, consequatur adipisci. Perspiciatis numquam dolorum quam enim unde delectus, hic ullam nihil aperiam maiores!</p>
      <section className="tags-container">
        <div className="angry-tag"></div>
        <div className="happy-tag"></div>
        <div className="worried-tag"></div>
      </section>
    </article>
  )
}