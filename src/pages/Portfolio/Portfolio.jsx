import React, { useEffect } from "react"
import "./Portfolio.css"
import PortfolioItem from "./PortfolioItem"

export default function Portfolio() {
  useEffect(() => {
    const cardsWrapper = document.querySelector("#cards")

    cardsWrapper.addEventListener("mousemove", (e) => {
      document.querySelectorAll(".card").forEach((card) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      })
    })
  })

  return (
    <section id="portfolio">
      <div id="cards">
        <PortfolioItem
          title="Pomodoro Clock"
          listItems={[
            "Selectable forest & space theme",
            "Four different time presets",
            "Alarm sound on break mode",
            "Reset, start/stop with one click",
          ]}
        />
        <PortfolioItem
          title="Data Visualization Projects"
          listItems={[
            "Five unique projects on a single React website",
            "Interactive homepage",
            "3 different datasets in tree map graph",
            "Navbar & footer animations",
          ]}
        />
        <PortfolioItem
          title="Markdown Previewer"
          listItems={[
            "Markdown previewer with React",
            "Markdown cheatsheet",
            "Resizable previewer",
            "Responsive design",
          ]}
        />
        <PortfolioItem
          title="JavaScript Calculator"
          listItems={[
            "iOS calculator design",
            "Usable with both keyboard & mouse",
            "Preview before using equals",
            "Worked with SCSS for styles",
            "Responsive design, works with iPhone 5",
          ]}
        />
        <PortfolioItem
          title="Random Quote Generator"
          listItems={[
            "Generate new quote on reload automatically",
            "Background color change on each quote",
            "Share on Twitter with one click",
          ]}
        />
      </div>
    </section>
  )
}
