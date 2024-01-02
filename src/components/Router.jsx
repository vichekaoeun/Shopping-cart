import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Cart from './Cart.jsx';
import ErrorPage from './ErrorPage.jsx';
const Router = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <App />
        },
        {
            path: 'shop',
            element: <Shop />
        },
        {
            path: 'cart',
            element: <Cart />
        }
    ]);
}