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
    const navItems = document.querySelectorAll(".nav__item")
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
    // const nav = document.querySelector("nav")
    const nameLogo = document.querySelector(".name__logo")
    nameLogo.dataset.scrolled = (true, window.scrollY > 0)
    // nav.dataset.scrolled = (true, window.scrollY > 0)
  })
  return (
    <nav>
      <ul>
        <a href="/" className="nav__item name">
          <div>
            <span aria-hidden="true">osmangund®</span>
          </div>
        </a>

        <p className="name__logo" aria-hidden="true">{`<OG />`}</p>

        <div id="links">
          <a href="#home" className="nav__item">
            <div>
              <span>Home</span>
            </div>
          </a>
          <a href="#about" className="nav__item">
            <div>
              <span>About</span>
            </div>
          </a>
          <a href="#portfolio" className="nav__item">
            <div>
              <span>Portfolio</span>
            </div>
          </a>
          <a href="#contact" className="nav__item">
            <div>
              <span>Contact</span>
            </div>
          </a>
        </div>
      </ul>
    </nav>
  )
}
