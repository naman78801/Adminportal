import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    users:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [],
    Filter: "",
    user: {
        name: "",
        email: "",
        phone: "",
        status: "Active",
    }
    ,
    isAdmin: "false"
}

// const userList = JSON.parse(localStorage.getItem("user"));

export const userSlice = createSlice({

    name: 'user',
    initialState,
    reducers: {

        login: (state, action) => {
            state.isAdmin = action.payload;

        },
        getUser: (state, action) => {
            state.user = state.users.find((data) => data.id == action.payload);

            // console.log(state.user)
        },
        addUser: (state, action) => {
            const newData = {
                id: nanoid(),
                ...action.payload
            }

            state.users.push(newData)
            localStorage.setItem("user", JSON.stringify(state.users))
        },
        deleteUser: (state, action) => {
            const filtered = state.users.filter(item => item.id !== action.payload);
            state.users = filtered;
            localStorage.setItem('user', JSON.stringify(filtered));


        },

        // updateUser: (state, action) => {
        //     state.contacts = state.contacts.map
        //         ((item) => item.id === action.payload ? action.payload : item);
        // },
        setFilter:(state,action)=>{
              
              state.Filter=action.payload;
              
        }
    }


})

export const { getUser, addUser, deleteUser, login,setFilter } = userSlice.actions

export default userSlice.reducer;