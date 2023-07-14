import { lazy } from "react";

const Home = lazy(() => import("pages/home"));

const privateRoutes = [
  {
    path: "/",
    element: <Home />,
  },
];

export { privateRoutes };
