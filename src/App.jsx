import { BrowserRouter, Route, Routes } from "react-router"

import Home from "./pages/Home.jsx"
import Comic from "./pages/Comic.jsx"
import Infographic from "./pages/Infographic.jsx"

function App() {
 
  return (
   <div  >
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/comic" element={<Comic/>}/>
      <Route path="/infographic" element={<Infographic />}/>
    </Routes>
    </BrowserRouter>


   </div>
  )
}

export default App
