import React from "react"
import ReactDOM from "react-dom"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import Browse from "./components/Browse";
import Login from "./components/Login";
import Body from "./components/Body";

const AppLayout = () =>
{
    return( <>
    <div className="app">
        <Header/>
        <Body/>
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
