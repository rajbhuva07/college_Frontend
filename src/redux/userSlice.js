import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    _id: "",
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    image: ""
}

// export const userSlice = createSlice({
//     name: "user",
//     initialState,
//     reducers: {
//         loginRedux: (state, action) => {
//             console.log(action.payload.data);
//             // state.user=action.payload.data
//             state._id = action.payload.data._id
//             state.firstname = action.payload.data.firstname
//             state.lastname = action.payload.data.lastname
//             state.email = action.payload.data.email
//             state.image = action.payload.data.image
//         },
//         logoutRedux: (state, action) => {

//             // state.user=action.payload.data
//             state._id = "";
//             state.firstname = "";
//             state.lastname = "";
//             state.email = "";
//             state.image = "";
//         }
//     }
// })

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginRedux: (state, action) => {
            const { _id, firstname, lastname, email, image } = action.payload.data;
            state._id = _id;
            state.firstname = firstname;
            state.lastname = lastname;
            state.email = email;
            state.image = image;
        },
        logoutRedux: (state, action) => {
            // Reset state to initial state upon logout
            return initialState;
        }
    }
});

export const { loginRedux, logoutRedux } = userSlice.actions

export default userSlice.reducer