import { containerClasses } from '@mui/material';
import React, { useEffect } from 'react'
import {useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Redirect() {
    const navigate=useNavigate();
    return (
        <>
            
           { navigate('/login')}
        </>
    )
}

export default Redirect
