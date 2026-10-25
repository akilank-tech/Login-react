import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../context/logincontext";

const DashBoard=()=>{
    const {setIsLoggedIn}=useContext(LoginContext)
    const navigate = useNavigate()
    const handleLogout=()=>{
        setIsLoggedIn(false)
        navigate("/")
    }
    return(
        <div className="min-h-screen bg-gradient-to-br from-violet-100 via-white to-purple-200
        flex items-center justify-center p-4">
            <div className="w-full max-w-lg rounded-2xl bg-white p-6 sm:p-10 text-center shadow-xl">
                <div className="mb-4 text-5xl">🎉</div>
                <h1 className="text-3xl font-bold text-violet-900 sm:text-4xl">Login Successful!</h1>
                <p className="mt-3 text-gray-600">Welcome to your Test Page.</p>
                <div className="my-6 overflow-hidden rounded-xl bg-violet-50 p-3">
                    <img src="https://picsum.photos/id/1015/600/350" alt="Beautiful mountain landscape"
                    className="h-52 w-full rounded-lg object-cover sm:h-64" />
                    <h2 className="mt-4 text-xl font-semibold text-violet-900">Your Test Image</h2>
                    <p className="mt-2 text-sm text-gray-600">
                        Your email and password were verified by the backend.</p>
                </div>
                <button onClick={handleLogout} className="w-full rounded-lg bg-violet-600 px-6 py-3 font-semibold
                text-white transition hover:bg-violet-700">
                    Logout
                </button>
            </div>
        </div>
    )
}
export default DashBoard