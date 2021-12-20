import { Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import './App.css';
import OrderForm from './components/OrderForm';
import Confirmation from './components/Confirmation';

const App = () => {
  return (
    <Routes>
      <Route path='/confirmation/:id' element={<Confirmation />} />
      <Route path='/order' element={<OrderForm />} />
      <Route path='/' element={<Hero />} />
    </Routes>
  );
};

export default App;
