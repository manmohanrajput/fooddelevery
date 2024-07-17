import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './component/Navbar';
import Home from './pages/Home/Home';
import Cart from './pages/Cart/Cart';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder';



function App() {
  return (
    <div className="App">
         <Navbar/>
         <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/place' element={<PlaceOrder/>}/>
          </Routes>
         </BrowserRouter>
    </div>
  );
}

export default App;
