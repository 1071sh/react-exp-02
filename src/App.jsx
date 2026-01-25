import Chart from "./pages/chart";
import Home from "./pages/home";
import Customer from "./pages/customer";
import Orders from "./pages/orders";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/notfound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chart" element={<Chart />} />
        <Route path="/customer" element={<Customer />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
