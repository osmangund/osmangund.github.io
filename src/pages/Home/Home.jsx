import Navbar from "../../components/Navbar/Navbar"
import reactLogo from "../../assets/react.svg"
import { useEffect } from "react"
import "./Home.css"

export default function Home() {
  useEffect(() => {
    const personalInfoWrapper = document.getElementById("personal-info-wrapper")
    const bigText = document.querySelector(".big-text")
    document.addEventListener("mousemove", (e) => {
      rotateElement(e, personalInfoWrapper)
    })
  })

  function rotateElement(event, element) {
    const x = event.clientX
    const y = event.clientY

    const middleX = window.innerWidth / 2
    const middleY = window.innerHeight / 2

    const offsetX = ((x - middleX) / middleX) * 45
    const offsetY = ((y - middleY) / middleY) * 45

    // -1 * to invert the rotation direction
    // RotateY is influnced by horizontal mouse movement (offsetX)
    // RotateX is influnced by vertical mouse movement (offsetY)
    element.style.setProperty("--rotateX", -1 * offsetY + "deg")
    element.style.setProperty("--rotateY", offsetX + "deg")
  }
  return (
    <>
      <Navbar />
      <section id="home">
        <div id="personal-info-wrapper">
          <div id="name-wrapper">
            <div className="line">
              <p className="word">OSMAN</p>
              <p className="word">EMRE</p>
            </div>
            <div className="line">
              <p className="word"></p>
              <p className="word">GUNDOGDU</p>
              <p className="word"></p>
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
              <p className="word small">DEVELOPER</p>
            </div>
          </div>
        </div>
        <div className="big-text">OG</div>
      </section>
    </>
  )
}
