import { BrowserRouter, Routes,Route} from "react-router-dom"
import Dasboard from "./pages/Dasboard"
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import Header from "./components/Header"
import Home from "./pages/Home"
import Project from "./pages/Project"
import Footer from "./components/Footer"
import About from "./pages/About"
import PrivateRoute from "./components/PrivateRoute"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import CreatePost from "./pages/CreatePost"
import UpdatePost from "./pages/UpdatePost"
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<PrivateRoute/>} >
      <Route path="/dashboard" element={<Dasboard />} />
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>} >
      <Route path="/create-post" element={<CreatePost />} />
      <Route path="/update-post/:postId" element={<UpdatePost />} />
      </Route>
      
      <Route path="/sign-in" element={<Signin />} />
      <Route path="/sign-up" element={<Signup />} />
      <Route path="/" element={<Home />} />
      <Route path="/project" element={<Project />} />
      <Route path="/about" element={<About />} />
      

    </Routes>
    
    <Footer/>
    </BrowserRouter>
  )
}
