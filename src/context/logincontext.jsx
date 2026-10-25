import { createContext, useState } from "react";

const LoginContext = createContext()

const Logincontext = (data) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [cpassword, setcPassword] = useState("")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [showCPassword, setShowCPassword] = useState(true)

    return (
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn, email, setEmail, password, setPassword,
         cpassword, setcPassword, showPassword, setShowPassword, showCPassword,
          setShowCPassword }}>
            {data.children}
        </LoginContext.Provider>
    )
}
export default Logincontext
export { LoginContext }