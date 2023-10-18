import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import MyCart from "../Pages/MyCart/MyCart";
import CartDetails from "../Pages/CartDetails/CartDetails";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPage></ErrorPage>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : "/login",
                element : <Login></Login>
            },
            {
                path : "/register",
                element : <Registration></Registration>
            },
            {
                path : "/addProduct",
                element : <AddProduct></AddProduct>
            },
            {
                path : "/products/:name",
                element : <Products></Products>,
                loader : ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
            },
            {
                path : "/product/:id",
                element : <ProductDetails></ProductDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
            },
            {
                path : "/carts",
                element : <MyCart></MyCart>,
                // loader : () => fetch(`http://localhost:5000/carts`)
            },
            {
                path : "/carts/:cartId",
                element : <CartDetails></CartDetails>,
                loader : ({params}) => fetch(`http://localhost:5000/cartsDetails/${params.cartId}`)
            }
        ]
    }
])

export default router; 