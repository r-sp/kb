import * as React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "~/pages/index";
import About from "~/pages/about";
import Blog from "~/pages/blog";
import NotFound from "~/pages/not-found";

import "@repo/style";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
]);

createRoot(document.getElementById("root")!).render(<RouterProvider router={router} />);
