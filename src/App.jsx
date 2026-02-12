import { Route, Routes } from 'react-router';

import './App.css'
import HomePage from './pages/HomePage';
import CheckoutPage from './pages/CheckoutPage';
import Orders from './pages/Orders';

function App() {
  

  return  (
    <Routes>
      <Route path='/' element={<HomePage/>} ></Route>
      <Route path='checkout' element={<CheckoutPage/>}  ></Route>
      <Route path='orders' element={<Orders/>}/>

    </Routes>
    
    
  );
}

export default App
