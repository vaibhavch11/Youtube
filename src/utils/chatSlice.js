import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constant";


const chatSlice = createSlice({
    name: "chat",
    initialState : {
        messages : [],
    },
    reducers : {
        addMessage: (state,action) => {
           
            //Using splice it will create a stack of size 10, and after 10th element it start removing it.
            state.messages.splice(LIVE_CHAT_COUNT,1);     

            //Note that while push, we are pushing element from the end but, we want to push element from the first.
            // state.messages.push(action.payload);  

            //it will push it from the first.
            state.messages.unshift(action.payload);  

             
        }
    }
})

export const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;