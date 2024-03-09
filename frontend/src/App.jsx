import classes from './App.module.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from '../src/Navbar/Navbar';
import Login from './pages/LoginPage/Login';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard';
import Register from './pages/Register/Register';
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position='top-right' reverseOrder={true} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
