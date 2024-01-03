import React, { useEffect } from "react"
import "./CursorTrail.css"

export default function CursorTrail() {
  const coords = { x: 0, y: 0 }

  useEffect(() => {
    const circles = document.querySelectorAll(".circle")
    circles.forEach((circle) => {
      circle.x = 0
      circle.y = 0
    })

    function animateCircles() {
      let x = coords.x
      let y = coords.y

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px"
        circle.style.top = y - 12 + "px"

        circle.style.scale = (circles.length - index) / (circles.length * 1.5)
        circle.x = x
        circle.y = y

        const nextCircle = circles[index + 1] || circles[0]
        x += (nextCircle.x - x) * 0.3
        y += (nextCircle.y - y) * 0.3
      })

      requestAnimationFrame(animateCircles)
    }

    window.addEventListener("mousemove", (e) => {
      coords.x = e.clientX
      coords.y = e.clientY
    })
    animateCircles()
  })

  return (
    <>
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </>
  )
}
