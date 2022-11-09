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
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
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
                element:<Reviewform></Reviewform>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path:'/reviews',
                element:<Myreview></Myreview>
            },
            {
                path:'/myservice',
                element:<AddserviceForm></AddserviceForm>
            }
        ]
    }
])


export default router;