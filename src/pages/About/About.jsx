import React from "react"
import "./About.css"

export default function About() {
  return (
    <>
      <section id="about">
        <div className="background-container">
          <img
            src="https://i.ibb.co/YRVzJDt/pexels-google-deepmind-18069693.jpg"
            alt=""
          />
        </div>
        <h1 className="title">About</h1>
        <p className="description">
          Front-end developer who cares about making things look and feel great
          for users.
        </p>
        <h3 className="title">Hobbies</h3>
        <p className="description">Reading books, psychology, gym.</p>
      </section>
    </>
  )
}
