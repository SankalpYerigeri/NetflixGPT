import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toggleGptSearch } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/langSlice";




const Header = () =>
    {
        const user = useSelector((store) => store.user);
        const gptSearch = useSelector((store) => store.gptSlice.toggleGptSearch);
        
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

        const handleLangChange = (e) =>
        {
          dispatch(changeLanguage(e.target.value));
        }

        

        return <div className="absolute w-screen bg-gradient-to-b from-black px-8 py-2 z-10 flex flex-wrap justify-between">
            <img className="w-44"
             src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"/>
             {user && <div className="text-white flex">
               {gptSearch && (<select className="bg-gray-700 text-white p-2 m-2" onChange={handleLangChange}>
                  {
                    SUPPORTED_LANGUAGES.map((lang)=> <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                  }
                </select>) }
                <button className="px-4 mx-2 bg-purple-700 text-white rounded-lg" 
                onClick={handleGptSearchClick}>
                  {gptSearch ? "Home Page" : "GPT Search"}
                  </button>
                <img className="w-20 h-20" src={user?.photoURL}/>
                <button onClick={handleSignOut} className="bg-black text-white roun" >Sign out</button>
             </div>}
        </div>
    };
    
    export default Header;