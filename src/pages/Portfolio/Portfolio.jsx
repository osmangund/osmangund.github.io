import React, { useEffect } from "react"
import "./Portfolio.css"
import PortfolioItem from "./Item/PortfolioItem"
import { ReactComponent as HourglassIcon } from "../../assets/hourglass.svg"
import { ReactComponent as DataGraphIcon } from "../../assets/datagraph.svg"
import { ReactComponent as CalculatorIcon } from "../../assets/calculator.svg"
import { ReactComponent as QuoteIcon } from "../../assets/quote.svg"
import { ReactComponent as MarkdownArrowIcon } from "../../assets/markdown-arrow.svg"
import { ReactComponent as MarkdownMIcon } from "../../assets/markdown-m.svg"

export default function Portfolio() {
  const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

  useEffect(() => {
    const cardsWrapper = document.querySelector("#cards")

    cardsWrapper.addEventListener("mousemove", (e) => {
      const cards = document.querySelectorAll(".card")

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect(),
          x = e.clientX - rect.left,
          y = e.clientY - rect.top

        card.style.setProperty("--mouse-x", `${x}px`)
        card.style.setProperty("--mouse-y", `${y}px`)
      })
    })

    const RANDOM_TEXT_EFFECT_WRAPPERS =
      document.querySelectorAll(".card-letters")

    RANDOM_TEXT_EFFECT_WRAPPERS.forEach((wrapper) => {
      wrapper.setAttribute("aria-hidden", true)
      wrapper.addEventListener("mousemove", () => {
        wrapper.innerHTML = randomString(1500)
      })
    })
  })

  function randomString(length) {
    let result = ""

    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return result
  }

  return (
    <section id="portfolio">
      <div id="cards">
        <PortfolioItem title="Pomodoro Clock" icon={<HourglassIcon />} />
        <PortfolioItem
          title="Data Visualization Projects"
          icon={<DataGraphIcon />}
        />
        <PortfolioItem
          title="Markdown Previewer"
          icon={<MarkdownMIcon />}
          icon2={<MarkdownArrowIcon />}
        />
        <PortfolioItem
          title="JavaScript Calculator"
          icon={<CalculatorIcon />}
        />
        <PortfolioItem title="Random Quote Generator" icon={<QuoteIcon />} />
        <PortfolioItem title="Test" />
      </div>
    </section>
  )
}
