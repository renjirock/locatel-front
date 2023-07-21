import Index from "./Components/Index";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import * as React from "react";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Admin from "./Components/admin/Admin";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Index />,
    },
    {
      path: "/login",
      element: <Login/>,
    },
    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/admin",
      element: <Admin path={1}/>,
    },
    {
      path: "/admin/deposits",
      element: <Admin path={2}/>,
    },
    {
      path: "/admin/withdraw",
      element: <Admin path={3}/>,
    },
    {
      path: "/admin/settings",
      element: <Admin path={4}/>,
    },
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <React.StrictMode>
          <RouterProvider router={router} />
        </React.StrictMode>
      </header>
    </div>
  );
}

export default App;
