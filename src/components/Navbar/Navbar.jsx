import NavItem from "./NavItem"
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

  function splitLetters(item) {
    const navItemText = item.children[0].children[0]
    const splittedWords = navItemText.innerText.split("")

    // Empty the old text
    navItemText.innerHTML = ""

    splittedWords.forEach((letter, index) => {
      const span = createLetterElement(letter, index)
      item.children[0].appendChild(span)
    })
  }

  useEffect(() => {
    const navItems = document.querySelectorAll(".nav__item")
    navItems.forEach((item) => {
      splitLetters(item)

      const cloneDiv = createCloneDiv(item)
      item.appendChild(cloneDiv)
    })
  })

  // Name-logo style change on scroll
  window.addEventListener("scroll", () => {
    const nameLogo = document.querySelector(".name__logo")
    nameLogo.dataset.scrolled = (true, window.scrollY > 0)
  })

  return (
    <nav>
      <ul>
        <NavItem
          href="/"
          ariaHidden="true"
          extraClass="name"
          text="osmangund®"
        />
        <p className="name__logo" aria-hidden="true">{`<OG />`}</p>
        <div id="links">
          <NavItem href="#home" text="Home" />
          {/* <NavItem href="#about" text="About" /> */}
          <NavItem href="#portfolio" text="Projects" />
          <NavItem href="#contact" text="Contact" />
        </div>
      </ul>
    </nav>
  )
}
