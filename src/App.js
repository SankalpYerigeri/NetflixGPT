import React, { useEffect } from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Body from "./components/Body";
import ReactPage from "./components/ReactPage";
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { addUser, removeUser } from "./utils/userSlice";



const AppLayout = () =>
{
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>
    {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              
              const {uid, email, displayName, photoURL} = user;
              dispatch(addUser({uid:uid, email:email, displayName:displayName, photoURL:photoURL}));
              navigate("/browse");
            } else {
              dispatch(removeUser());
              navigate("/login");
            }
          });

          return () => unsubscribe();
    }, []);

    return( 
    
    <div className="app">        
        <Outlet/>        
    </div>
    
    )
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/Login",
                element : <Login/>
            },
            {
                path : "/browse",
                element : <Browse/>
            }

        ],
        errorElement : <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Provider store={appStore}>
<RouterProvider router={appRouter}/>
</Provider>
)
