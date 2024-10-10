import { useState, useRef } from "react";
import Header from "./Header";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BG_URL } from "../utils/constants";



const Login = () =>
{
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);

    const email=useRef(null);
    const password=useRef(null);
    const name=useRef(null);
    const dispatch = useDispatch();

    const handleSubmit = () =>
    {
        const message = validateData(email.current.value, password.current.value);
        setErrorMessage(message);

        if(message) return;

        //Sign in or Sign Up logic

        if(!isLogin)
        {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                    displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/160774479?v=4"
                    }).then(() => {
                        const {uid, email, displayName, photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
                        navigate("/browse");
                    }).catch((error) => {
                        setErrorMessage(error.message);
                    });
                      
                    
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }

        else
        {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + " - " + errorMessage);
                });
        }

        
    }

    const handleClick = () =>
    {
        setIsLogin(!isLogin);
    }
    

    return (
        <>
        <div className="absolute">
            <Header/>
            <img className="h-screen object-cover rounded-lg md:h-auto" src={BG_URL}/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isLogin ? "Sign In" : "Sign Up"}</h1>
            {!isLogin && <input ref={name} type="text" placeholder="Name" className="p-2 my-4 w-full bg-gray-700"/>}
            <input ref={email} type="text" placeholder="Email" className="p-2 my-4 w-full bg-gray-700"/>            
            <input ref={password} type="text" placeholder="Password" className="p-2 my-4 w-full rounded-lg bg-gray-700"/>
            <p className="text-red-600  font-bold">{errorMessage}</p>
            <button className="p-4 my-6 w-full cursor-pointer bg-red-700 rounded-lg"
            onClick={handleSubmit}>
                Login</button>
            <p className="py-4 cursor-pointer" onClick={handleClick}>
            {isLogin ? "New to Netflix? Sign Up" : "Already user? Sign In"}
                 </p>
        </form>
        </>
    )
};

export default Login;