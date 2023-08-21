
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import "./Style/Login.css"
import Counter from './Components/Counter';
import ProtectedRoute from "./Components/ProtectedRoute/Protectedroute.jsx"
import { useSelector } from 'react-redux';
import Dashboard from './Components/Dashboard';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import ItemList from './Components/ItemList';
import UserDetails from "./Components/UserDetails.jsx"
function App() {

  // use selector hook is used to keep the track on our slice
  const { isAuthenticated } = useSelector((state) => state.root)
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/counter' element={<Counter />} />

        {/* PRotected route task */}
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>

        {/* Routing task */}
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />

        {/* dynamic routing task  */}
        <Route path='/products/:id' element={<Products />} />

        {/* IteList task routing */}
        <Route path='itemlist' element={<ItemList />} />

        {/* Data Fetch Api task routing */}
        <Route path='userdetails' element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
