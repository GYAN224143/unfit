import Product from "./pages/Product";
import Profile from "./pages/Profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-layout">
      <BrowserRouter>
        <Routes>
          <Route index element={<Profile />} />
          <Route path="product" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

