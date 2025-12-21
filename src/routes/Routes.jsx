import { createBrowserRouter } from "react-router";
import Layouts from "../layouts/Layouts";
import Home from "../pages/Home";
import AllApps from "../pages/AllApps";
import Installation from "../pages/Installation";
import ErrorPage from "../pages/ErrorPage";
import AppDetails from "../pages/AppDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    errorElement:<ErrorPage />,
    children: [
      {
        index: true,
        Component: Home,
        loader: () => fetch("../data.json"),
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/allApps",
        loader: () => fetch("../data.json"),
        Component: AllApps,
      },
      {
        path: "/installation",
        element: <Installation />
      },
      {
        path: "/app/:id",
        Component:AppDetails
      }
    ],
  },
]);

export default router;
