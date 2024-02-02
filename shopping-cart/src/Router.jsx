import {createBrowserRouter, RouterProvider} from "react-router-dom"
import MainPage from "./components/MainPage.jsx"
import ShopPage from "./components/ShopPage"
import ErrorPage from "./components/ErrorPage"
import Navbar from "./components/Navbar.jsx"

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Navbar />,
            errorElement: <ErrorPage />,
            children: [
                {
                    path: "MainPage",
                    element: <MainPage/>
                },
                {
                    path: "ShopPage",
                    element: <ShopPage/>
                }
            ]
        },
    ])

    return <RouterProvider router={router} />
}

export default Router;