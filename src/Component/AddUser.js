 
import React, { useState, useEffect, useRef, useInsertionEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { addUser, getUser ,updateUser} from "../reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import validator from "validator"; 

const initialState = {
    name: "",
    email: "",
    phone: "",
    status: "Active",
};


const AddUser = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id}=useParams();

    const { user } = useSelector(state => state.user);

    const [state, setState] = useState(initialState);

    const { name, email, phone, status } = state;


       

    useEffect(() => {
        dispatch( getUser(id) );
        setState({ ...user });
    }, [user,id])


    const handleSubmit = (e) => {
        e.preventDefault();

        const uemail = validator.isEmail(email);
        const uphone = validator.isMobilePhone(phone);
        
        if (!uemail || !uphone) {
            toast.error("email or phone is wrong");
        }
        else if (!name || !email || !phone || name.charAt(0) == ' ') {
            toast.error("Field not be empty or whitespace character");
        } else {

            if( !id ){
                dispatch(addUser(state))
                toast.success("contact added successfully")
                }
                else{
                  dispatch(updateUser(state))
                  toast.success("contact updated successfully")
                }
           
            setTimeout(() => navigate('/home'), 1000)
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
                            onChange={handleInputChange} required
                        />


                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Email address
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your email ..."
                            value={email || ""} required
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">
                            Phone
                        </label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Your phone no...."
                            className="form-control"
                            value={phone || ""}
                            onChange={handleInputChange}
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            required
                        />
                    </div>
 
                    <input type="submit" className="form__button"  value= { id ? "Update" : "Save"} />

                </form>
            </div>
        </>
    )
}

export default AddUser
