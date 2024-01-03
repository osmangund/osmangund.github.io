import React from "react"
import Navbar from "../../components/Navbar/Navbar"
import "./Home.css"

export default function Home() {
  window.addEventListener("scroll", () => {
    var nameLogo = document.querySelector("#name-logo")
    nameLogo.classList.toggle("logo-animation", window.scrollY > 0)
  })
  return (
    <>
      <Navbar />
      <main id="home">
        <div id="name-logo-wrapper">
          <h1 id="name-logo">OG</h1>
        </div>
        <div id="personal-info-wrapper">
          <h1>React Developer</h1>
          <h1>Hi, I'm Osman Emre from Izmir, Turkey</h1>
        </div>
      </main>
      
    </>
  )
}
