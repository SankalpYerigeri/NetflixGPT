import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";


const Header = () =>
    {
        const user = useSelector((store) => store.user);
        const navigate = useNavigate();
        const handleSignOut = () =>
        {
            signOut(auth).then(() => {
                navigate("/Login");
              }).catch((error) => {
                // An error happened.
              });
        }
        const dispatch = useDispatch();
        const handleGptSearchClick = () =>
        {
          dispatch(toggleGptSearch());
        }

        

        return <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex flex-wrap justify-between">
            <img className="w-44"
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
             {user && <div className="text-white flex">
                <button className="px-4 mx-2 bg-purple-700 text-white rounded-lg" 
                onClick={handleGptSearchClick}>
                  GPT Search
                  </button>
                <img className="w-20 h-20" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="bg-black text-white roun" >Sign out</button>
             </div>}
        </div>
    };
    
    export default Header;