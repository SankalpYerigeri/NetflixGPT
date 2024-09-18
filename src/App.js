import React from "react"
import ReactDOM from "react-dom/client"
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Body from "./components/Body";
import ReactPage from "./components/ReactPage";

const AppLayout = () =>
{
    return( <>
    <div className="app">
        <Outlet/>
    </div>
    </>)
}

const appRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Browse/>
            },
            {
                path : "/Login",
                element : <Login/>
            }

        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>)
