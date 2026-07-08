import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet } from "react-router";
import { RouterProvider } from "react-router";

import Restaurent from "./src/components/Restaurent"
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "res/:resId",
        element: <Restaurent />
      }
    ],
    errorElement: <ErrorPage />,
  },

]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
