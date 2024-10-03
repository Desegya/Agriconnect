import { RouterProvider } from "react-router-dom";
import BuyerDashboard from "./components/BuyerDashboard";
import SellerDashboard from "./components/SellerDashboard";
import router from "./routers/routes";

function App() {
  return <RouterProvider router={router}/>
}

export default App;
