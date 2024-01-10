import Navbar from "../../components/Navbar/Navbar"
import reactLogo from "../../assets/react.svg"
import { useEffect } from "react"
import "./Home.css"

export default function Home() {
  useEffect(() => {
    // const personalInfoWrapper = document.getElementById("personal-info-wrapper")

    document.addEventListener("mousemove", (e) => {
      // trackElement(e, personalInfoWrapper)
    })
  })

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
            <div className="black-wrap"></div>
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
      </section>
    </>
  )
}
