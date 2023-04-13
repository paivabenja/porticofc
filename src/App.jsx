import { Route, Routes } from "react-router-dom"
import Home from "./Home"

export default function App() {
  return (
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/intro" element={<h1>intro</h1>} />
      </Routes>
    </div>
  )
}
