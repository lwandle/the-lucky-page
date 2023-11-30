import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Main from "./components/Main";
import RequestDemo from "./components/RequestDemo";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "", element: <HomePage /> },
      { path: "/demo-request", element: <RequestDemo /> },
    ],
  },
]);
