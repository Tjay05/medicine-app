import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

import { 
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HumanWrap from "./pages/humanMeds/HumanWrap";
import AvailStock from "./pages/humanMeds/AvailableStock";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login/>} />
      <Route element={<Navbar/>}>
        <Route path="Home" element={<Dashboard/>} />
        <Route element={<HumanWrap/>}>
          <Route path="Human" element={<AvailStock/>} />
        </Route>
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
