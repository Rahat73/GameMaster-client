import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main/Main";
import AddService from "../../Pages/AddService/AddService";
import Blog from "../../Pages/Blog/Blog";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login-Registration/Login";
import Registration from "../../Pages/Login-Registration/Registration";
import MyReviews from "../../Pages/MyReviews/MyReviews";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import Services from "../../Pages/Services/Services";
import TermsAndConditions from "../../Pages/TermsAndConditions/TermsAndConditions";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>,
                // loader: async () => fetch('http://localhost:5000/services')
            },
            {
                path: '/serviceDetails/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => fetch(`http://localhost:5000/serviceDetails/${params.id}`)
            },
            {
                path: '/myReviews/:id',
                element: <PrivateRoutes><MyReviews></MyReviews></PrivateRoutes>,
                loader: async ({ params }) => fetch(`http://localhost:5000/myReviews/${params.id}`, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('GameMaster-token')}`
                    }
                })
            },
            {
                path: '/addService',
                element: <PrivateRoutes><AddService></AddService></PrivateRoutes>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/T&C',
                element: <TermsAndConditions></TermsAndConditions>
            }
        ]
    }
]);

export default router;