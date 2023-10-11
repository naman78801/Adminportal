
import Login from './Component/Login.js';
import Welcome from './Component/Welcome.js'
import Home from './Component/Home.js';
import AddUser from './Component/AddUser.js'
import NotFound from './Component/NotFound.js';
import { ToastContainer } from 'react-toastify';
import View from './Component/View.js';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useSelector } from 'react-redux';

function App() {
  const { isAdmin } = useSelector((state) => state.user);

  return (
    <>
      <Router>
        <ToastContainer position="top-center" />
        <Routes>
          <Route exact path='/' element={<Welcome />}>  </Route >
          <Route exact path='/login' element={<Login />} />

          {/* { isAdmin=='true' ? <Route exact path='/home' element={<Home/>} />  : <Route exact path='?' element={<NotFound/>} />}
                 {isAdmin=='true' ? <Route exact path='/home/register' element={<AddUser/>} /> : <Route path='?' element={<NotFound/>} /> }                 */}

          <Route exact path='/home' element={<Home />} />
          <Route exact path='/home/register' element={<AddUser />} />
          <Route exact path='/home/view/:id' element={<View />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;

