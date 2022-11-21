import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Login from './components/login';
import Signup from './components/signup';
import Dasboard from './components/Dashboard';
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Addtopic from './components/Addtopic';
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/dashboard" element={<Dasboard/>}/>
        <Route path='/addtopic' element={<Addtopic/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
