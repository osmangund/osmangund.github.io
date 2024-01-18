import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg"
import { ReactComponent as GitHubIcon } from "../../assets/github.svg"
import "./Contact.css"
import { useEffect } from "react"
import { trackElement } from "../../components/MouseTrack/MouseTrack"
import { InView } from "react-intersection-observer"

export default function Contact() {
  function addAnimation(element) {
    element.setAttribute("data-animated", true)

    const contactTextWrapper = document.querySelector("#contact-text-wrapper")
    const contactTextContent = Array.from(contactTextWrapper.children)

    contactTextContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true)
      duplicatedItem.setAttribute("aria-hidden", true)
      contactTextWrapper.appendChild(duplicatedItem)
    })
  }

  useEffect(() => {
    const contactText = document.querySelector(".contact-text")

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation(contactText)
    }
    const circle = document.querySelector("#contact-circle")
    const contact = document.querySelector("#contact")

    contact.addEventListener("mousemove", (event) => {
      trackElement(event, circle)
    })
  })
  return (
    <InView as="div" threshold={0.75}>
      {({ inView, ref, entry }) => (
        <>
          <section ref={ref} id="contact">
            <div
              id="contact-text-wrapper"
              className={`${inView ? "show" : "hide"}`}
            >
              <h2 className="contact-text">
                Contact me — we can build together —{" "}
              </h2>
            </div>
            <div id="contacts">
              <div
                id="contact-circle"
                className={`${inView ? "show" : "hide"}`}
              >
                <a
                  href="https://www.linkedin.com/in/osmangund/"
                  target="_blank"
                  rel="external noreferrer"
                  className="icon-link"
                >
                  <LinkedinIcon className="icon linkedin-icon" />
                </a>
                <a
                  href="https://github.com/osmangund/"
                  target="_blank"
                  rel="external noreferrer"
                  className="icon-link"
                >
                  <GitHubIcon className="icon github-icon" />
                </a>
              </div>
            </div>
          </section>
        </>
      )}
    </InView>
  )
}
