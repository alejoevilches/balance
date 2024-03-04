import { Card } from "./Card"
import "./Notes.css"

export function Notes(){
  return (
    <section className="cardContainer">
      <Card />
      <Card />
      <Card />
      <Card />
    </section>
  )
}