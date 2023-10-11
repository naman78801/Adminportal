import React from 'react'
import './styles/Welcome.css'
import { useNavigate } from 'react-router-dom'
const Welcome = () => {

    const navigate=useNavigate();

    const switchTab=()=>{
         navigate('/login');
    }
    return (
        <>


            <div className='welcome-container'>
                
                <nav className="navbar">
                    <div className="container-fluid">
                        <a className="navbar-brand text-cyan-50 font-semibold">   Admin </a>
                        <div className="d-flex"  >
                           
                            <button className="btn btn-outline-primary w-35 font-semibold text-cyan-50" type="submit" onClick={switchTab}>Login</button>
                        </div>

                    </div>
                </nav>
    


                <div className='con-1 fst-italic'>
                    <h1>Welcome TO Admin Pannel</h1>
                </div>

            </div>
        </>
    )
}

export default Welcome

