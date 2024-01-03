import "./App.css"
import CursorTrail from "./components/CursorTrail/CursorTrail"
import About from "./pages/About/About"
import Home from "./pages/Home/Home"
import Portfolio from "./pages/Portfolio/Portfolio"

export default function App() {
  return (
    <>
      <Home />
      <About />
      <Portfolio />
      <CursorTrail />
    </>
  )
}
