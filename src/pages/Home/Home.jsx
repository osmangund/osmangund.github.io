import Navbar from "../../components/Navbar/Navbar"
import reactLogo from "../../assets/react.svg"
import { useEffect } from "react"
import "./Home.css"
import Avatar from "../../components/Avatar/Avatar"

export default function Home() {
  useEffect(() => {
    // const personalInfoWrapper = document.getElementById("personal-info-wrapper")

    document.addEventListener("mousemove", (e) => {
      // trackElement(e, personalInfoWrapper)
    })
  })
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  useEffect(() => {
    let iterations = 0
    const nameWords = document.querySelectorAll("[data-anim='hacker']")

    setTimeout(() => {
      const nameAnimationInterval = setInterval(() => {
        nameWords.forEach((word) => {
          word.innerHTML = word.innerHTML
            .split("")
            .map((letter, index) => {
              if (index < iterations) {
                return word.dataset.value[index]
              }
              return alphabet[Math.floor(Math.random() * alphabet.length)]
            })
            .join("")
        })
        if (iterations >= 9) clearInterval(nameAnimationInterval)

        iterations += 1 / 4
      }, 30)
    }, 750)
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
                  applications. It allows you to create your app piece by piece
                  like lego blocks.{" "}
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
