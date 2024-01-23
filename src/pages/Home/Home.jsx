import Navbar from "../../components/Navbar/Navbar"
import reactLogo from "../../assets/react.svg"
import { useEffect } from "react"
import "./Home.css"
import Avatar from "../../components/Avatar/Avatar"

export default function Home() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

  useEffect(() => {
    let iterations = 0
    const hackerTexts = document.querySelectorAll("[data-anim='hacker']")

    setTimeout(() => {
      const hackerAnimInterval = setInterval(() => {
        hackerTexts.forEach((text) => {
          hackerEffect(text)
        })
        if (iterations >= 9) clearInterval(hackerAnimInterval)

        iterations += 1 / 4
      }, 30)
    }, 500)

    function hackerEffect(text) {
      text.innerHTML = text.innerHTML
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return text.dataset.value[index]
          }
          return alphabet[Math.floor(Math.random() * alphabet.length)]
        })
        .join("")
    }
  })

  return (
    <>
      <Navbar />
      <section id="home">
        <Avatar />
        <div id="personal-info-wrapper">
          <div id="name-wrapper">
            <div className="line">
              <p className="word" data-anim="hacker" data-value="OSMAN">
                OSMAN
              </p>
              <p className="word" data-anim="hacker" data-value="EMRE">
                EMRE
              </p>
            </div>
            <div className="line">
              <div></div>
              <p className="word" data-anim="hacker" data-value="GUNDOGDU">
                GUNDOGDU
              </p>
              <div></div>
            </div>
          </div>
          <div id="job-title-wrapper">
            <div className="line">
              <p id="react-text" className="word fancy small">
                <span className="letter">R</span>
                <span className="letter">E</span>
                <span className="letter">A</span>
                <span className="letter">C</span>
                <span className="letter">T</span>
                <span className="description">
                  React is a JavaScript library to build user interfaces for
                  your application. It allows you to create your app piece by
                  piece like lego blocks. More, these lego blocks are reusable.{" "}
                  <img
                    src={reactLogo}
                    className="logo react"
                    alt="React logo"
                  />
                </span>
              </p>
              <p
                className="word small"
                data-anim="hacker"
                data-value="DEVELOPER"
              >
                DEVELOPER
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
