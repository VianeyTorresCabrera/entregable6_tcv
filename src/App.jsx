
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import Login from './pages/Login';
import Register from './pages/Register';
import CartPage from './pages/CartPage';
import Purchases from './pages/Purchases';
import Navbar from './components/shared/Navbar';
import ProtectedRoutes from './pages/ProtectedRoutes';
import ProdInfo from './pages/ProdInfo';

function App() {
  

  return (
   <div className='app_menu'>
    <Navbar/>      
    <div className='app_container'>  
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/product/:id' element={<ProdInfo/>}/>
      <Route element ={<ProtectedRoutes/>}>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/purchases' element={<Purchases/>}/>
      </Route>
      <Route path='*' element = {<h2>This route does not exist</h2>}/>      
    </Routes>
   </div>
   </div>
  )
}

export default App;
