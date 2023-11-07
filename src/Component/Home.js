import React, { useState, Link, useEffect } from 'react'
import './styles/home.css'
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser, logout } from "../reducers/userSlice";
import Pagination from './Pagination';
import Search from './Search';

import { useMemo } from 'react';


const Home = () => {
  
  const { users, Filter, isAdmin } = useSelector(state => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();


 

  const addUser = () => {
    navigate('/home/register');
  }
  const removeItem = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {

      dispatch(deleteUser(id))
      toast.success("Contact deleted successfully");
      navigate('/home');
    }
  };

  const handleLogout = () => {
    
      if (
        window.confirm("Are you sure that you wanted to logout ?")
      ) {
        dispatch(logout());
        navigate('/')
      }
    

  }





  ///  ---- pagination logic----
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 3;
  const lastIndex = recordsPerPage * currentPage;
  const firstIndex = lastIndex - recordsPerPage;
  // const records = users.slice(firstIndex, lastIndex);
  const nPages = Math.ceil(users.length / recordsPerPage);

  // console.log( nPages+ "      ..........")


  const records = useMemo(() => {


    let computedTodos = users;

    if (Filter) {

      computedTodos = computedTodos.filter(
        todo =>
          todo.name.toLowerCase().startsWith(Filter.toLowerCase())
      );
    }

    return computedTodos.slice(
      firstIndex, lastIndex
    );
  }, [users, currentPage, Filter]);




  return (
    <>


      {/* -------navbar----------- */}
      <nav className="navbar">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <div className="d-flex justify-content-between"  >
            <div>
              <button className="btn btn-outline-primary  " type="submit" onClick={addUser}>Add User</button></div>

            <div> <button className="btn btn-outline-danger" type="submit" onClick={handleLogout}>Logout</button></div>
          </div>

        </div>
      </nav>

      {/* ------------data------------ */}
      <div className="container mt-3 mb-4 "  >
        <div className="col-lg-9 mt-4 mt-lg-0">
          <div><Search /></div>
          <div className="row">

            <div className="col-md-12">
              <div className="user-dashboard-info-box table-responsive mb-0  bg-danger p-4 shadow-sm">

                <table className="table manage-candidates-top mb-0  ">
                  <thead>
                    <tr>
                      <th>Candidate Name</th>
                      <th className="text-center">Status</th>
                      <th className="action text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {

                      records.map((item, index) =>
                        <tr className="candidates-list" key={item.id}>
                          <td className="title">
                            <div className="thumb">
                              <img className="img-fluid" src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="" />
                            </div>
                            <div className="candidate-list-details">
                              <div className="candidate-list-info">
                                <div className="candidate-list-title">
                                  <h5 className="mb-0"><a href="#">{item.name}</a></h5>
                                </div>
                                <div className="candidate-list-option">
                                  <ul className="list-unstyled">
                                    <li><i className="fas fa-filter pr-1"></i>{item.email}</li>
                                    <li><i className="fas fa-map-marker-alt pr-1"></i>{item.phone}</li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="candidate-list-favourite-time text-center">
                            <a className="candidate-list-favourite order-2 text-danger" href="#"><i className="fas fa-heart"></i></a>
                            <span className="candidate-list-time order-1">Shortlisted</span>
                          </td>
                          <td>
                            <ul className="list-unstyled mb-0 d-flex justify-content-end">
                              <li><a href={`/home/view/${item.id}`} className="text-primary" data-toggle="tooltip" title="" data-original-title="view"><i className="far fa-eye"></i></a></li>

                              <li><a href={`/home/update/${item.id}`} className="text-info" data-toggle="tooltip" title="" data-original-title="Edit" > <i className="fas fa-pencil-alt"></i>  </a></li>

                              <li><a href="#" className="text-danger" data-toggle="tooltip" title="" data-original-title="Delete" onClick={() => removeItem(item.id)}><i className="far fa-trash-alt"></i></a></li>
                            </ul>
                          </td>
                        </tr>
                      )}

                  </tbody>
                </table>

                {/* //-------pagination--- */}
                {records.length != 0 ? <Pagination nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} /> : <div>data not found</div>}

              </div>
            </div>
          </div>


        </div>
      </div>


    </>
  )
}

export default Home
