import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/home/Home";
import NotFound from "../pages/error/NotFound";
import Register from "../pages/register/Register";
import Login from "../pages/login/Login";
import Projects from "../pages/projects/Projects";
import Services from "../pages/services/Services";
import ServiceDetail from "../pages/serviceDetail/ServiceDetail";

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
        element: <Projects />,
        loader: () => fetch("/projects.json"),
      },
      {
        path: "/services",
        element: <Services />,
        loader: () => fetch("/packagelist.json"),
      },
      {
        path: "/service/:id",
        element: <ServiceDetail />,
        loader: () => fetch("/packagelist.json"),
      },
    ],
  },
]);

export default router;
