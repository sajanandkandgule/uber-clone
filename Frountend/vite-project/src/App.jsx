import react, { useContext } from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home.jsx"
import UserSignup from "./pages/UserSignup.jsx"
import UserLogin from "./pages/UserLogin.jsx"
import CaptainSignup from "./pages/CaptainSignup.jsx"
import CaptainLogin from "./pages/Captainlogin.jsx"
import Start from "./pages/Start.jsx"
import { UserDataContext } from "./context/UserContext.jsx"
import UserProtectWrapper from "./pages/UserProtectWrapper.jsx"
import UserLogout from "./pages/UserLogout.jsx"
import CaptainHome from "./pages/CaptainHome.jsx"
import CaptainProtectWrapper from "./pages/CaptainProtectWrapper.jsx"
const App = () => {


  const value  = useContext(UserDataContext)
  console.log( "checking " , value)
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/" element={
          <UserProtectWrapper><Start/></UserProtectWrapper>} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/captain-home" element={
          <CaptainProtectWrapper><CaptainHome/></CaptainProtectWrapper>} />
      </Routes>
    </div>
  )
}

export default App