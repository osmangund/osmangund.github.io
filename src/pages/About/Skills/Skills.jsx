import { useEffect } from "react"
import "./Skills.css"
import { useInView } from "react-intersection-observer"
import TagList from "./TagList"

export default function Skills() {
  const { ref: skillsRef, inView: skillsInView } = useInView({
    threshold: 1,
  })

  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller")

    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      scrollers.forEach((scroller) => {
        if (scroller.getAttribute("data-animated") === "true") return
        addAnimation(scroller)
      })
    }

    function addAnimation(scroller) {
      scroller.setAttribute("data-animated", true)
      const scrollerInner = scroller.querySelector(".scroller__inner")
      const scrollerContent = Array.from(scrollerInner.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        duplicatedItem.setAttribute("aria-hidden", true)
        scrollerInner.appendChild(duplicatedItem)
      })
    }
  }, [])

  return (
    <>
      <div
        ref={skillsRef}
        className={`skills scroller ${skillsInView ? "skills-show" : ""}`}
        data-direction="left"
      >
        <TagList />
      </div>
      <div
        ref={skillsRef}
        className={`skills scroller ${skillsInView ? "skills-show" : ""}`}
        data-direction="right"
      >
        <TagList />
      </div>
    </>
  )
}
