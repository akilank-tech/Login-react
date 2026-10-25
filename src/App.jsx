import Login from "./Pages/login"
import Signup from "./Pages/signin"
import Logincontext from "./context/logincontext"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DashBoard from "./Pages/dashboard"
import { LoginContext } from "./context/logincontext"
import { useContext } from "react"

const RequireAuth = ({ children }) => {
  const { isLoggedIn } =
    useContext(LoginContext)
  return isLoggedIn
    ? children : <Navigate to="/" replace />
}

function App() {
  return (
    <>
      <Logincontext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/signin" element={<Signup />}></Route>
            <Route path="/dashboard" element={<RequireAuth><DashBoard /></RequireAuth>}></Route>
            <Route path="*" element={<Navigate to="/" replace />}></Route>
          </Routes>
        </BrowserRouter>
      </Logincontext>
    </>
  )
}

export default App
