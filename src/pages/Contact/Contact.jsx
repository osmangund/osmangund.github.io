import { ReactComponent as LinkedinIcon } from "../../assets/linkedin.svg"
import { ReactComponent as GitHubIcon } from "../../assets/github.svg"
import "./Contact.css"

export default function Contact() {
  return (
    <>
      <section id="contact">
        <div id="contact-text-wrapper">
          <h2 className="contact-text">
            Contact me — we can build together —{" "}
          </h2>
          <h2 className="contact-text">
            Contact me — we can build together —{" "}
          </h2>
          <h2 className="contact-text">
            Contact me — we can build together —{" "}
          </h2>
          <h2 className="contact-text">
            Contact me — we can build together —{" "}
          </h2>
          <h2 className="contact-text">
            Contact me — we can build together —{" "}
          </h2>
        </div>

        <div id="contacts-wrapper">
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
      </section>
    </>
  )
}
