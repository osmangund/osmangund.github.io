import "./PreLoader.css"

export default function PreLoader() {
  window.addEventListener("load", () => {
    setTimeout(() => {
      const preLoader = document.getElementById("pre-loader")
      preLoader.classList.add("pre-loader-hidden")
    }, 1500)

    //   preLoader.addEventListener("transitionend", () => {
    //     const root = document.getElementById("root")
    //     root.removeChild(preLoader)
    //   })
  })

  return <div id="pre-loader"></div>
}
