import React, { useEffect } from "react"
import "./CursorTrail.css"

export default function CursorTrail() {
  const coords = { x: 0, y: 0 }
  const colors = [
    "#9196ba",
    "#858aab",
    "#7a7e9c",
    "#6e728d",
    "#63667f",
    "#585b70",
    "#4d5063",
    "#434555",
  ]

  useEffect(() => {
    const circles = document.querySelectorAll(".circle")
    circles.forEach((circle, index) => {
      circle.x = 0
      circle.y = 0
      circle.style.backgroundColor = colors[index % colors.length]
    })

    function animateCircles() {
      let x = coords.x
      let y = coords.y

      circles.forEach((circle, index) => {
        circle.style.left = x - 12 + "px"
        circle.style.top = y - 12 + "px"

        circle.style.scale = (circles.length - index) / circles.length
        circle.style.zIndex = circles.length - index
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
      const circleWrapper = document.getElementById("circle-wrapper")
      if (
        circleWrapper.style.display === "none" ||
        !circleWrapper.style.display
      ) {
        setTimeout(() => {
          circleWrapper.style.display = "block"
        }, 100)
      }
    })

    animateCircles()
  }, [])

  return (
    <div id="circle-wrapper">
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
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
      <div className="circle" />
    </div>
  )
}
