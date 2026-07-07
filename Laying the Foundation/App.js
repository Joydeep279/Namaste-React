import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router";

import Header from "./src/components/Header";
import Body from "./src/components/Body";
import About from "./src/components/About";
import ErrorPage from "./src/components/ErrorPage";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);
const outer = appRouter;
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
