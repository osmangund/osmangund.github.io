export function trackMiddleScreen(event, element) {
  const x = event.clientX
  const y = event.clientY

  const middleX = window.innerWidth / 2
  const middleY = window.innerHeight / 2

  const offsetX = Math.round(((x - middleX) / middleX) * 100)
  const offsetY = Math.round(((y - middleY) / middleY) * 100)

  element.style.setProperty("--rotateX", -1 * offsetY + "deg")
  element.style.setProperty("--rotateY", offsetX + "deg")
  element.style.setProperty("transform-style", "preserve-3d")
  element.style.setProperty(
    "transform",
    "perspective(5000px) rotateX(var(--rotateX)) rotateY(var(--rotateY))"
  )
}

export function trackElement(event, element) {
  const x = event.clientX
  const y = event.clientY

  const rect = element.getBoundingClientRect(),
    radius = 25

  const centerX = rect.left + rect.width / 2,
    centerY = rect.top + rect.height / 2

  const offsetX = Math.round((x - centerX) / radius, 4),
    offsetY = Math.round((y - centerY) / radius, 4)

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
