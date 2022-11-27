import { createBrowserRouter } from "react-router-dom";
import AllBuyrs from "../DashBoard/AdminRoutes/AllBuyrs";
import AllSeller from "../DashBoard/AdminRoutes/AllSeller";
import DashBoardLayout from "../DashBoard/DashBoardLayout/DashBoardLayout";
import Payment from "../DashBoard/Payment/Payment";
import AddProducts from "../DashBoard/SellerRoutes/AddProducts";
import Myproducts from "../DashBoard/SellerRoutes/Myproducts";
import MyOrders from "../DashBoard/UserRoute/MyOrders";
import Main from "../Layouts/Main";
import CategoriousProducts from "../Pages/CategoriousProducts/CategoriousProducts";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AdminRoute from "./PrivateRoute/AdminRoute";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import SellerRoute from "./PrivateRoute/SellerRoute";


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
        element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
        children: [
         {
            path:'allsellers',
            element:<AdminRoute><AllSeller></AllSeller></AdminRoute>
         },
         {
            path:'allbuyrs',
            element:<AdminRoute><AllBuyrs></AllBuyrs></AdminRoute>
         },
         {
            path:'addProducts',
            element:<SellerRoute><AddProducts/></SellerRoute>
         },
         {
            path:'myProducts',
            element:<SellerRoute><Myproducts/></SellerRoute>
         },
         {
            path:"myOrders",
            element: <PrivateRoute><MyOrders></MyOrders></PrivateRoute>
         },
        
         
        ]
    },

    {
        path:"/payment/:id",
        loader:  ({params})=>{
            return fetch(`http://localhost:5000/orderdProduct/${params.id}`)
        },
        element:<Payment/>
    }
])


export default routes;