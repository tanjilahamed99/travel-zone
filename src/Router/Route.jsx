import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/root/Root";
import Home from "../pages/home/Home";
import Detail from "../pages/Detail/Detail";
import Login from "../pages/Login/Login";

const Route = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/detail',
                element: <Detail></Detail>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    }
])

export default Route;