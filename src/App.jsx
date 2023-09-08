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
import ItemSold from "./pages/humanMeds/ItemSold";
import Expired from "./pages/humanMeds/Expired";
import ExpiredMeds from "./pages/animalMeds/Expired";
import AnimalWrap from "./pages/animalMeds/AnimalWrap";
import AvailableStock from "./pages/animalMeds/AvailableStock";
import ItemsSold from "./pages/animalMeds/ItemSold";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login/>} />
      <Route element={<Navbar/>}>
        <Route path="Home" element={<Dashboard/>} />
        <Route path="Human-Medicine" element={<HumanWrap/>}>
          <Route index element={<AvailStock/>} />
          <Route path="Items-Sold" element={<ItemSold/>} />
          <Route path="Expired" element={<Expired/>} />
        </Route>
        <Route path="Animal-Medicine" element={<AnimalWrap/>} >
          <Route index element={<AvailableStock/>} />
          <Route path="Items-Sold" element={<ItemsSold/>} />
          <Route path="Expired" element={<ExpiredMeds/>} />
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
