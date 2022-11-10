import { createBrowserRouter } from "react-router-dom";
import AddserviceForm from "../../Addservice/AddserviceForm";
import Blog from "../../Blog/Blog";
import Main from "../../Layout/Main";
import Login from "../../Login/Login";
import Myreview from "../../Myreview/Myreview";
import Allservice from "../../Pages/Allservices/Allservice";
import Home from "../../Pages/Home/Home/Home";
import ServiceDetail from "../../Pages/ServiceDetail/ServiceDetail";
import Reviewform from "../../Reviewform/Reviewform";
import Signup from "../../Signup/Signup";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/services',
                element:<Allservice></Allservice>
            },
            {
                path:'/services/:id',
                element:<ServiceDetail></ServiceDetail>,
                loader:({params}) => fetch(`https://cloud-kitchen-server-two.vercel.app/services/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<Signup></Signup>
            },
            {
                path:'/reviewform/:id',
                element:<PrivateRoute><Reviewform></Reviewform></PrivateRoute>,
                loader:({params}) => fetch(`https://cloud-kitchen-server-two.vercel.app/services/${params.id}`)
            },
            {
                path:'/reviews',
                element:<PrivateRoute><Myreview></Myreview></PrivateRoute>
            },
            {
                path:'/myservice',
                element:<PrivateRoute><AddserviceForm></AddserviceForm></PrivateRoute>
            }
        ]
    }
])


export default router;