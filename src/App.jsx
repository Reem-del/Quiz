import {Route,Routes } from "react-router-dom"
import Home from "./pages/home";
import Quiz from "./pages/quiz";
function App() {
  return (
    <div className="w-full h-screen">
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/quiz" element={<Quiz />} />
    </Routes>
    </div>
    
  )
}

export default App



    