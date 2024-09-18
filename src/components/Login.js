import { useState } from "react";
import Header from "./Header";

const Login = () =>
{

    const [isLogin, setIsLogin] = useState(true);

    const handleClick = () =>
    {
        setIsLogin(!isLogin);
    }
    

    return (
        <>
        <div className="absolute">
            <Header/>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/85ff76db-39e5-423a-afbc-97d3e74db71b/null/IN-en-20240909-TRIFECTA-perspective_b22117e0-4610-4d57-a695-20f77d241a4a_large.jpg"/>
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isLogin ? "Sign In" : "Sign Up"}</h1>
            {!isLogin && <input type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"/>}
            <input type="text" placeholder="Email" className="p-2 my-4 w-full bg-gray-700"/>
            <input type="text" placeholder="Password" className="p-2 my-4 w-full rounded-lg bg-gray-700"/>
            <button className="p-4 my-6 w-full cursor-pointer bg-red-700 rounded-lg">Login</button>
            <p className="py-4 cursor-pointer" onClick={handleClick}>
            {isLogin ? "New to Netflix? Sign Up" : "Already user? Sign In"}
                 </p>
        </form>
        </>
    )
};

export default Login;