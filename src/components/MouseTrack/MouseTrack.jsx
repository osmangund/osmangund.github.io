export function trackElement(event, element) {
  const x = event.clientX
  const y = event.clientY

  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  const offsetX = ((x - middleX) / middleX) * 45
  const offsetY = ((y - middleY) / middleY) * 45

  // -1 * to invert the rotation direction
  // RotateY is influnced by horizontal mouse movement (offsetX)
  // RotateX is influnced by vertical mouse movement (offsetY)
  element.style.setProperty("--rotateX", -1 * offsetY + "deg")
  element.style.setProperty("--rotateY", offsetX + "deg")
  element.style.setProperty("transform-style", "preserve-3d")
  element.style.setProperty(
    "transform",
    "perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY))"
  )
}
