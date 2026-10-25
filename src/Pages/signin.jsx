import { useContext, useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import { LoginContext } from "../context/logincontext"
const Signup = () => {
    const { email, setEmail, password, cpassword, setcPassword, setPassword, showPassword,
         setShowPassword, showCPassword, setShowCPassword } = useContext(LoginContext)

    const [error, setError] = useState("")
    const [message, setMessage] = useState("")
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        setError("")
        setMessage("")
        if (!email.trim() || !password || !cpassword) {
            setError("All fields are required")
            return
        }
        if (password.length < 4) {
            setError("passwords do not match")
            return
        }
        if(password !== cpassword){
            setError("Passwords do not match")
            return
        }
        try {
            setLoading(true)
            const response = await axios.post("http://localhost:5000/signin",
                {
                    useremail: email.trim(),
                    userpassword: password
                }
            )
            if (response.data.success) {
                setMessage("Signup successfull please login.")
                setEmail("")
                setPassword("")
                setcPassword("")

                setTimeout(() => {
                    navigate("/")
                }, 1000)
            }
        } catch (err) {
            console.log("Signup Error:",err)
            console.log("Error Response:",err.response?.data)
            setError(err.response?.data?.message || "Unable to connect to the server")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="h-[100dvh] min-h-0 w-full overflow-hidden bg-gradient-to-br from-amber-100
         via-white to-orange-200 flex items-center justify-center p-3 sm:p-4">
            <div className="w-full max-w-md rounded-2xl bg-white p-4 sm:p-10 shadow-xl">
                <div className="mb-8 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-2xl font-bold text-white">
                        A
                    </div>
                    <h1 className="text-3xl font-bold text-gray-900">Hey Hi 👋</h1>
                    <p className="mt-2 text-sm text-gray-500">Create your new account :)</p>
                </div>

                <div className="flex flex-col gap-2 my-2">
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                        <input onChange={(e) => setEmail(e.target.value)} type="email" required placeholder="Enter your email" value={email} autoComplete="email"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500
                     focus:ring-2 focus:ring-orange-100" />
                    </div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                        <div className="relative">
                            <input value={password} onChange={(e) => setPassword(e.target.value)} type={showPassword ? "password" : "text"} required placeholder="Create a password"
                                autoComplete="new-password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500
                     focus:ring-2 focus:ring-orange-100"/>
                            <button className=" text-gray-400 absolute inset-y-0 right-2 flex items-center" onClick={() => setShowPassword(!showPassword)}><i className={showPassword ? "fa-solid fa-eye-slash" : "fa-regular fa-eye"}></i></button>
                        </div></div>
                    <div>
                        <label className="mb-2 block text-sm font-medium text-gray-700">Confirm Password</label>
                        <div className="relative">
                            <input value={cpassword} onChange={(e) => setcPassword(e.target.value)} type={showCPassword ? "password" : "text"} required placeholder="Confirm your password"
                                autoComplete="new-password"
                                className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-orange-500
                     focus:ring-2 focus:ring-orange-100" />
                            <button className=" text-gray-400 absolute inset-y-0 right-2 flex items-center" onClick={() => setShowCPassword(!showCPassword)}><i className={showCPassword ? "fa-solid fa-eye-slash" : "fa-regular fa-eye"}></i></button>
                        </div></div>
                    {error && (
                        <p role="alert" className="rounded-lg mt-2 bg-red-50 p-3 text-sm text-red-600">{error}</p>
                    )}
                    {message && (
                        <p role="status" className="rounded-lg mt-2 bg-green-50 p-3 text-sm text-green-700">{message}</p>
                    )}
                    <button onClick={handleSignup} disabled={loading} className="w-full mt-2 rounded-lg bg-orange-500 py-3 font-semibold text-white transition hover:bg-orange-600
                    disabled:opacity-60">{loading ? "Creating account..." : "Sign Up"}</button>
                    <p className="mt-6 text-center text-sm text-gray-600">Already have an account? <Link to={'/'} className="
                    font-semibold text-orange-600 underline hover:text-orange-800 mt-2">Login</Link></p>
                </div>
            </div>
        </div>
    )
}
export default Signup 