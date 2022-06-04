import { createSlice, addAsynkThunk } from "@reduxjs/toolkit";

export const partsSlice = createSlice({
    name: "parts",
    initialState: {
        status: null,
        data: [
            {
                id: 1,
                name: "Капот",
                damaged: true,
                path: ""
            },
            {
                id: 2,
                name: "Крыша",
                damaged: false,
                path: ""
            }
        ]
    },
    reducers: {
        removeSelection: (state, action) => {
            return {
                ...state, 
                data: state.data.map(part => part.id === action.payload.id ? 
                        {...part, damaged: false} : 
                        part
                    )
            }
        }
    }
})


export default partsSlice.reducer;
export const {removeSelection} = partsSlice.actions