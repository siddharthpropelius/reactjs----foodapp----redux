import { Route, Routes } from 'react-router-dom';
import HomePage from './components/homepage/Index';
import Menu from './components/menu/Index';
import Cart from './components/cart/Index';
import OrderNow from './components/ordernow/Index';
import Restro from './components/restro/Index';
import Login from './components/Auth/Login';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<OrderNow />} />
        <Route path="/restro/:id" element={<Restro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
