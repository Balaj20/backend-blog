import { BrowserRouter, Routes,Route} from "react-router-dom"
import Dasboard from "./pages/Dasboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Footer from "./components/Footer"
import About from "./pages/About"

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/home" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      

    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}
