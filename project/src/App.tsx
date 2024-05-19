import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Products from "./Products";
import NotFound from "./pages/NotFound";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;