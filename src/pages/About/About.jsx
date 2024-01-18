import "./About.css"
import Skills from "./Skills/Skills"
import { useInView } from "react-intersection-observer"

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
  })

  return (
    <>
      <section id="about">
        <div className={`background-container`}>
          <img
            src="https://i.ibb.co/YRVzJDt/pexels-google-deepmind-18069693.jpg"
            alt='"Perceive, synthesize, interfere" background'
            ref={ref}
            className={`background-img ${inView ? "show-img" : ""}`}
          />
        </div>
        <div className="text-wrapper">
          <div ref={ref} className={`description ${inView ? "show" : ""}`}>
            Front-end developer who cares deeply about making things look and
            feel great for users.
          </div>
          <Skills />
        </div>
      </section>
    </>
  )
}
