import './App.css';
import './index.css';
import { Header } from './Components/Home/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsCard } from './Components/Customer/ProductCard';
import { CustomerDashboard } from './Components/Customer/CustomerDashboard';
import { Cart } from './Components/Customer/Cart';
import { CartProvider } from './Components/Customer/CardContext'; // Import CartProvider

function App() {
  return (
    <>
      <CartProvider> {/* Wrap in CartProvider */}
        <Router>
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/onlineShop" element={<CustomerDashboard />} />
            <Route path="/productCard/:id" element={<ProductsCard />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </CartProvider>
    </>
  );
}

export default App;
