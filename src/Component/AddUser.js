
import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useEffect, useRef, useInsertionEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, getUser } from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const initialState = {
    name: "",
    email: "",
    phone: "",
    status: "Active",
};


const AddUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
 
    const { user } = useSelector(state => state.user);

    const [state, setState] = useState(initialState);

    const { name, email, phone, status } = state;


     

    useEffect(() => { 
        setState({ ...user });
    }, [user])


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !phone) {
            toast.error("Please provide value into each input field");
        } else {
 
                       
            dispatch(addUser(state))
            toast.success("contact added successfully")
            setTimeout(() => navigate('/home'),1000)
        }
    };


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value });
      

    };

 
    return (
        <>


            <div className="form__container d-flex felx-column align-items-center justify-content-center">
                <form onSubmit={handleSubmit}>
                    <h4 className="form__heading">Please Fill the data</h4>
                    <hr />

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Your Name ..."
                            value={name || ""}
                            onChange={handleInputChange}
                        />


                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp" 
                            name="email"
                            placeholder="Your email ..."
                            value={email || ""}
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Phone
                        </label>
                        <input
                            type="phone"
                            name="phone"
                            placeholder="Your phone no...."
                            className="form-control"
                            value={phone || ""}
                            onChange={handleInputChange}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                    </div>

                    <input type="submit" className="form__button"/>
                       
                </form>
            </div>
        </>
    )
}

export default AddUser
