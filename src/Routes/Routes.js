import { createBrowserRouter } from "react-router-dom";
import Service from "../components/Service";
import Main from "../Layaout/Main";
import AddServices from "../Pages/AddServices";
import AllServices from "../Pages/AllServices";
import Blog from "../Pages/Blog";
import Home from "../Pages/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import MyReviews from "../Pages/MyReviews";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>

            },
            {
                path:'/services',
                element:<AllServices></AllServices>,
                loader: () => fetch('http://localhost:5000/all-services')
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/add-services',
                element: <PrivateRoute><AddServices></AddServices></PrivateRoute>

            },
            {
                path:'/services/:id',
                element:<Service></Service>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/my-reviews',
                element:<PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: '/blog',
                element:<Blog></Blog>
            }

           
        ]
    }
])