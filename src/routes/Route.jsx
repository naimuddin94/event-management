import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Projects from "../pages/projects/Projects";
import Blog from "../pages/blog/Blog";
import ServiceDetail from "../pages/serviceDetail/ServiceDetail";
import PrivateRoute from "./PrivateRoute";

const homeLoader = async () => {
  const [members, packages, reviews] = await Promise.all([
    fetch("/team.json").then((response) => response.json()),
    fetch("/packagelist.json").then((response) => response.json()),
    fetch("/reviews.json").then((response) => response.json()),
  ]);

  return { members, packages, reviews };
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => homeLoader(),
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/projects",
        element: (
          <PrivateRoute>
            <Projects />
          </PrivateRoute>
        ),
        loader: () => fetch("/projects.json"),
      },
      {
        path: "/blog",
        element: (
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        ),
        loader: () => fetch("/packagelist.json"),
      },
      {
        path: "/service/:id",
        element: (
          <PrivateRoute>
            <ServiceDetail />
          </PrivateRoute>
        ),
        loader: () => fetch("/packagelist.json"),
      },
    ],
  },
]);

export default router;
