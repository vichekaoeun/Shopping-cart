import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import CartRender from "./CartRender.jsx";
import ErrorPage from "./ErrorPage.jsx";
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Home />,
            errorElement: <ErrorPage />,
        },
        {
            path: '/shop',
            element: <Shop />,
            children: [
                { path: 'shop/cart', element: <CartRender /> }
            ],
        },
    ]);
    return <RouterProvider router={router} />
}
export default Router