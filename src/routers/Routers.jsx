import { createBrowserRouter } from "react-router-dom";

import Root from "../layouts/Root";
import Home from "../components/Home/Home";
import About from "../components/About/About";
import NotFound from "../components/shared/NotFound/NotFound";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "../routers/PrivateRoute";
import PropertyView from "../components/Home/Property_s/PropertyView";
import Contact from "../components/Contact/Contact";
import Essence from "../components/Essence/Essence";
import Update from "../components/UpdateUser/Update";

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
        path: "/Essence",
        element: (
          <PrivateRoute>
            <Essence></Essence>
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
        path: "/update",
        element: (
          <PrivateRoute>
            <Update></Update>
          </PrivateRoute>
        ),
      },
      {
        path: "/property-view/:idd",
        element: (
          <PrivateRoute>
            <PropertyView></PropertyView>
          </PrivateRoute>
        ),
        loader: () => fetch("/fakeData.json"),
      },
    ],
  },
]);
export default router;
