import axios from 'axios'
import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { LoginContext } from "../context/logincontext"
const Login = () => {
    const { email, setEmail, password, setPassword, showPassword, setShowPassword, setIsLoggedIn } = useContext(LoginContext)
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");
        if (!email.trim() || !password) {
            setError("Please enter email and password");
            return;
        }
        try {
            setLoading(true);
            const response = await axios.post("http://localhost:5000/login", { useremail: email.trim(), userpassword: password })
            if (response.data.success) {
                setIsLoggedIn(true)
                setEmail("")
                setPassword("")
                navigate("/dashboard")
            }
        } catch (err) {
            setError(err.response?.data?.message || "Unable to connect to the server")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-[100dvh] min-h-0 w-full overflow-hidden bg-gradient-to-br
         from-violet-100 via-white to-purple-200 flex items-center justify-center p-6 sm:p-7">
            <div className='w-full max-w-md rounded-2xl bg-white px-4 py-12 sm:px-10 sm:py-15 shadow-xl'>
                <div className='text-center mb-6 sm:mb-8'>
                    <div className='mx-auto mb-4 flex h-10 sm:h-14 w-10 sm:w-14 items-center justify-center rounded-2xl bg-violet-600 text-2xl font-bold text-white'>A</div>
                    <h1 className='text-2xl sm:text-3xl font-bold text-violet-900'>Welcome Back!</h1>
                    <p className='mt-1 sm:mt2 text-sm text-gray-500'>Login to your account.</p>
                </div>

                <div>
                    <label className='mb-2 block text-xs sm:text-sm font-medium text-gray-700'>Email Address</label>
                    <input name="useremail" value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Entrer your email"
                        autoComplete='email'
                        className="w-full text-xs sm:text-base rounded-lg border border-gray-300 
                        px-2 py-2 sm:px-4 sm:py-3 outline-none 
                        transition focus:border-violet-600
                    focus:ring-2 focus:ring-violet-200"/>
                </div>
                <div>
                    <label className='mb-2 block text-xs mt-2 sm:text-sm font-medium text-gray-700'>Password</label>
                    <div className="relative mb-5 ">
                        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? "password" : "text"}
                            value={password} required placeholder=" Enter your password" autoComplete='current-password' 
                            className=" text-xs sm:text-base w-full sm:px-4 sm:py-3 px-2 py-2 rounded-lg border border-gray-300  outline-none focus:border-violet-600 focus:ring-2
                        focus:ring-violet-200" />
                        <button className=" text-gray-400 text-xs sm:text-base absolute inset-y-0 right-2 flex items-center" onClick={() => setShowPassword(!showPassword)}>
                            <i className={showPassword ? "fa-solid fa-eye-slash" : "fa-regular fa-eye"}></i></button>
                    </div>
                </div>
                {error && (<p role='alert' className='rounded-lg bg-red-50 p-2 sm:p-3 text-xs sm:text-sm text-red-600 mb-5'>{error}</p>)}

                <button type='submit' disabled={loading} className="w-full rounded-lg bg-violet-600 py-1 sm:py-3 
                font-semibold text-white transition hover:bg-violet-700
                    disabled:opacity-60" onClick={handleLogin}>{loading ? "Logging in..." : "Login"}</button>

                <p className="mt-6 text-center text-xs sm:text-sm text-gray-600">Don't have an Account?<Link to={'/signin'} className="font-semibold text-violet-700 underline hover:text-violet-900">SignUp</Link></p>
            </div>
        </div>

    )
}
export default Login