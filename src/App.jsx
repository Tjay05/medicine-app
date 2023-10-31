import Navbar from "./layout/Navbar";
import Login from "./pages/Login";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Admin Pages
import Dashboard from "./pages/Dashboard";
import HumanWrap from "./pages/humanMeds/HumanWrap";
import AvailStock from "./pages/humanMeds/AvailableStock";
import ItemSold from "./pages/humanMeds/ItemSold";
import Expired from "./pages/humanMeds/Expired";
import ExpiredMeds from "./pages/animalMeds/Expired";
import AnimalWrap from "./pages/animalMeds/AnimalWrap";
import AvailableStock from "./pages/animalMeds/AvailableStock";
import ItemsSold from "./pages/animalMeds/ItemSold";
import Notification from "./pages/Notifixation";
import Employee from "./pages/Employee";
import Receipt from "./pages/Receipt";

// Cashier Pages
import CashierNavbar from "./pages/cashier/CashierNav";
import Sales from "./pages/cashier/Sales";
import CashReciept from "./pages/cashier/CashierReceipt";
import CashNotifications from "./pages/cashier/Notifications";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Login />} />
      <Route element={<Navbar />}>
        <Route path="Home" element={<Dashboard />} />
        <Route element={<HumanWrap />}>
          <Route path="Human-Medicine" element={<AvailStock />} />
          <Route path="Items-Sold" element={<ItemSold />} />
          <Route path="Expired" element={<Expired />} />
        </Route>
        <Route element={<AnimalWrap />}>
          <Route path="Animal-Medicine" element={<AvailableStock />} />
          <Route path="Items-Sold" element={<ItemsSold />} />
          <Route path="Expired" element={<ExpiredMeds />} />
        </Route>
        <Route path="Employee" element={<Employee />} />
        <Route path="Receipt" element={<Receipt />} />
        <Route path="Notifications" element={<Notification />} />
      </Route>
      <Route element={<CashierNavbar />}>
        <Route path="Sales" element={<Sales />} />
        <Route path="Cashier-Receipts" element={<CashReciept />} />
        <Route path="Cashier-Notification" element={<CashNotifications />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
