import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../DashBoard/DashBoardLayout/DashBoardLayout";
import Main from "../Layouts/Main";
import CategoriousProducts from "../Pages/CategoriousProducts/CategoriousProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute/PrivateRoute";


const routes = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>

            },
            {
                path:'/register',
                element:<Register/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/category/:categoryName',
                loader: ({params}) => {
                    return fetch(`http://localhost:5000/products/${params.categoryName}`)
                },
                element:<PrivateRoute><CategoriousProducts/></PrivateRoute>
            },
        ]
    },
    {
        path:'/dashboard',
        element: <DashBoardLayout/>
    }
])


export default routes;