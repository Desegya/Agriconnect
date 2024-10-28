import { RouterProvider } from "react-router-dom";
import router from "./routers/routes";
import { CartProvider } from "./contexts/CartContext"; // Import CartProvider

function App() {
  return (
    
      <RouterProvider router={router} />
 
  );
}

export default App;
