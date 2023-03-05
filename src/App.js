import './App.css';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <>
      {/* <Home/> */}
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/' element={<Cards />} />
          <Route path='/cart/:id' element={<CardsDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
