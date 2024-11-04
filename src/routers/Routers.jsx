import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import NotFound from "../components/shared/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../routers/PrivateRoute";
import FoodView from "../components/Home/Foods/FoodView";
import Contact from "../components/Contact/Contact";
import Healthy from "../components/Healthy/Healthy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/fakeData.json"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/healthy",
        element: (
          <PrivateRoute>
            <Healthy></Healthy>
          </PrivateRoute>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/food-view/:idd",
        element: (
          <PrivateRoute>
            <FoodView></FoodView>
          </PrivateRoute>
        ),
        loader: () => fetch("/fakeData.json"),
      },
    ],
  },
]);
export default router;
