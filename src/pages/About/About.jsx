import React, { useEffect } from "react"
import "./About.css"

export default function About() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        console.log(entry.isIntersecting)
        entry.target.classList.toggle("show", entry.isIntersecting)
      })
    },
    { threshold: 1 }
  )

  useEffect(() => {
    const textWrapper = document.querySelector(".text-wrapper")
    observer.observe(textWrapper)
  })
  return (
    <>
      <section id="about">
        <div className="background-container">
          <img
            src="https://i.ibb.co/YRVzJDt/pexels-google-deepmind-18069693.jpg"
            alt=""
            className="background-img"
          />
        </div>
        <div className="text-wrapper">
          <h3 className="title">About</h3>
          <p className="description">
            Front-end developer who cares about making things look and feel
            great for users.
          </p>
          <h3 className="title">Skills</h3>
          <p className="description">
            I have experience in HTML, CSS/SASS, JavaScript, React, Node.js and
            little in couple of some more. I like to acquire skills when the
            need arises, allowing me to concentrate on solving problems rather
            than incorporating new technologies just for the sake of doing so.
          </p>
        </div>
      </section>
    </>
  )
}
