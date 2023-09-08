import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login/>} />
      <Route element={<Navbar/>}>
        <Route path="Home" element={<Dashboard/>} />
      </Route>
    </Route>
  )
)

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
