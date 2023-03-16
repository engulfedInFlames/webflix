import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Root from "./Root";
import Search from "./Search";
import Watch from "./Watch";

const myRouter = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Home />,
          errorElement: <h1>Page Not Found</h1>,
        },
        {
          path: "watch",
          element: <Watch />,
          errorElement: <h1>Page Not Found</h1>,
        },
        {
          path: "search",
          element: <Search />,
          errorElement: <h1>Page Not Found</h1>,
        },
      ],
      errorElement: <h1>Page Not Found</h1>,
    },
  ],
  { basename: "" }
);

export default myRouter;