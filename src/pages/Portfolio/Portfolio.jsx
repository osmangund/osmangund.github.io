import React, { useEffect } from "react"
import "./Portfolio.css"
export default function Portfolio() {
  useEffect(() => {
    const cards = document.querySelector("#cards")
    cards.addEventListener("mousemove", (e) => {
      for (const card of document.getElementsByClassName("card")) {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      }
    })
  })

  return (
    <>
      <section id="portfolio">
        <div id="cards">
          <div className="card">
            <h1>test</h1>
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
          <div className="card">
            <div className="card-border"></div>
            <div className="card-content"></div>
          </div>
        </div>
      </section>
    </>
  )
}
