import { BrowserRouter, Routes,Route} from "react-router-dom"
import Dasboard from "./pages/Dasboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dasboard />} />
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup/>} />

    </Routes>
    
    
    </BrowserRouter>
  )
}
