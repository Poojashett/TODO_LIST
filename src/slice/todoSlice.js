import { createSlice } from "@reduxjs/toolkit"

const todoSlice = createSlice(
    {
        name: "counter",
        initialState: {
            value: 0,
            actionString: ""
        },
        reducers:{
            addIncrement : (state , action)=>{
                state.value += 1 ;
                state.actionString = action.payload;
            },
            addDecrement:(state,action)=>{
                state.value -= 1;
                state.actionString = action.payload;
            },
            addReset:(state,action)=>{
                state.value = 0;
                state.actionString = action.payload;
            }
        }
    }
)

export const { addIncrement, addDecrement, addReset } = todoSlice.actions; 
export default todoSlice.reducer;