import React from "react"
import "./Navbar.css"

export default function Navbar() {
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    nav.classList.toggle("sticky", window.scrollY > 0)
  })
  return (
    <nav>
      <ul>
        <a href="">
          <span className="first-letter">O</span>smangund
        </a>
        <div id="links-wrapper">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </div>
      </ul>
    </nav>
  )
}
