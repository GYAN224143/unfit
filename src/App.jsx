import Product from "./pages/Product";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-layout">
      <BrowserRouter>
        <Routes>
          <Route index element={<Product />} />
          <Route path="product" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

