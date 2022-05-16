import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import ApoinmentPage from './Pages/ApoinmentPage/ApoinmentPage';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className='max-w-[1400px] mx-auto'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/appoinment' element={
          <RequireAuth>
            <ApoinmentPage></ApoinmentPage>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='signup' element={<Signup></Signup>}></Route>
      </Routes>
      <>
        <ToastContainer></ToastContainer>
      </>
    </div>
  );
}

export default App;
