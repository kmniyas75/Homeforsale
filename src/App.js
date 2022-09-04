import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductListScreen from './screens/ProductListScreen';
import HomeScreen from './screens/HomeScreen';
import HouseDetailedScreen from './screens/HouseDetailedScreen';

function App() {
  
  return (
    <div>
      <nav className="nav">
        <ul className="nav-items">
          
          <li className='d-flex'><Link to="/"><img style={{height:"5vh"}} src="./logo.jpg" alt=""/><span className='heading'>Estatery</span></Link></li>
          <li><Link to="/link">Rent</Link></li>
          <li id="buy"><Link to="/buy">Buy</Link></li>
          <li><Link to="/sell">Sell</Link></li>
          <li><Link to="/manage">Manage Property</Link></li>
          <li><Link to="/resources">Resources</Link></li>
        </ul>
        <ul className="nav-items">
          <li><button><Link to="/login">Login</Link></button></li>
          <li><button><Link to="/signup">Sign Up</Link></button></li>
        </ul>
      </nav>

    <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/buy" element={<ProductListScreen />}></Route>
        <Route path="/house/:slugs" element={<HouseDetailedScreen /> }></Route>
      </Routes>

      <div className="footer">
        <div>
          <h3>About Me</h3>
          <div>
            <p>company name:...</p>
            <p>Ofiice address:...</p>
          </div>
        </div>
          
        <div>
          <h3>Contact Me</h3>
          <div>
            <p>Instagram</p>
            <p>facebook</p>
            <p>whatsapp</p>
          </div>
        </div>
      </div>
      </div>
  );
}

export default App;
