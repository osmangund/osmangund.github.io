import { trackElement } from "../MouseTrack/MouseTrack"
import "./Navbar.css"
import { useEffect } from "react"

export default function Navbar() {
  function createLetterElement(letter, index) {
    const span = document.createElement("span")
    span.classList.add("letter")
    span.style.setProperty("--index", index)
    span.innerText = letter

    return span
  }
  function createCloneDiv(item) {
    const cloneDiv = item.children[0].cloneNode(true)
    cloneDiv.style.position = "absolute"
    cloneDiv.style.top = "0"
    cloneDiv.style.left = "0"

    return cloneDiv
  }

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav-item")
    navItems.forEach((item) => {
      // Empty normal text, split words into letters, append them back
      const navItemDiv = item.children[0]
      const navItemText = navItemDiv.children[0]
      const splittedWords = navItemText.innerText.split("")
      navItemDiv.innerHTML = ""

      splittedWords.forEach((letter, index) => {
        const span = createLetterElement(letter, index)
        item.children[0].appendChild(span)
      })

      let cloneDiv = createCloneDiv(item)
      item.appendChild(cloneDiv)
    })
  })
  window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav")
    const nameLogo = document.querySelector(".name-logo")
    nameLogo.classList.toggle("name-logo-animation", window.scrollY > 0)
    nav.classList.toggle("sticky", window.scrollY > 0)
  })
  return (
    <nav>
      <ul>
        <a
          href="https://linkedin.com/in/osmangund"
          target="_blank"
          rel="noreferrer"
          className="nav-item"
        >
          <div>
            <span className="nav-item-text">osmangund®</span>
          </div>
        </a>
        <a
          href="https://linkedin.com/in/osmangund"
          target="_blank"
          rel="noreferrer"
          className="name-logo"
        >
          {`<OG />`}
        </a>

        <div id="links-wrapper">
          <a href="#home" className="nav-item">
            <div>
              <span className="nav-item-text">Home</span>
            </div>
          </a>
          <a href="#about" className="nav-item">
            <div>
              <span className="nav-item-text">About</span>
            </div>
          </a>
          <a href="#portfolio" className="nav-item">
            <div>
              <span className="nav-item-text">Portfolio</span>
            </div>
          </a>
          <a href="#contact" className="nav-item">
            <div>
              <span className="nav-item-text">Contact</span>
            </div>
          </a>
        </div>
      </ul>
    </nav>
  )
}
