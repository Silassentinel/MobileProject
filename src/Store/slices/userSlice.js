//#region imports here:
import { createSlice } from "@reduxjs/toolkit";
//#endregion

//#region if async thunk here
//#endregion

//#region slice here
const UserSlice = createSlice(
    {
        name: "Users",
        initialState: [{
            date: {},
            profileInfo : 
            {
                avatar: "",
                repos: [],
                rest : ""
            }
        }],
        reducers:
        {
            removeUser: (state, action) => 
            {
                state.pop(action.payload)
            },
            addUser: (state, action) => 
            {
                state.push(action.payload);
            },
            clearUsers: (state,action) => 
            {
                state = [];
            }
        }
    });
//#endregion

//#region export here:
export const { removeUser, addUser, clearUsers } = UserSlice.actions;
export const UserReducer = UserSlice.reducer;
//#endregion