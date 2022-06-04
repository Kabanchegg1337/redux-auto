import { createSlice } from "@reduxjs/toolkit";


export const notificationsSlice = createSlice({
    name: "notifications",
    initialState: [

    ],
    reducers: {
        addNotification: (state, action) => {
            state.push(action.payload);
        }
    }
})

export default notificationsSlice.reducer;
export const {addNotification} = notificationsSlice.actions