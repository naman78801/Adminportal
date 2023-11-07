
import Login from './Component/Login.js';
import Welcome from './Component/Welcome.js'
import Home from './Component/Home.js';
import AddUser from './Component/AddUser.js' 
import { ToastContainer } from 'react-toastify';
import View from './Component/View.js';
import 'react-toastify/dist/ReactToastify.css';
import Protected from './ProtectedRoute/Protected.js';

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux';
function App() {
  const { isAdmin } = useSelector((state) => state.user);
  const isAuthenticate = isAdmin;

  return (
    <>
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path='/' element={<Welcome />}>  </Route >
          <Route exact path='/login' element={<Login />} /> 
          <Route
            path="/home"
            element={
              <Protected isLoggedIn={isAuthenticate}>
                <Home />
              </Protected>
            }
          />
          <Route element={<Protected isLoggedIn={ isAuthenticate} />}>

            <Route exact path='/home/register' element={<AddUser />} />

            <Route exact path='/home/update/:id' element={<AddUser />} />

            <Route exact path='/home/view/:id' element={<View />} />

          </Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;

// git remote add origin https://github.com/lalit052002/local.git
// git branch -M main
// git push -u origin main