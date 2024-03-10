import { createSlice } from "@reduxjs/toolkit";


const projectSlice=createSlice({
    name:"project",
    initialState:{
        show:false,
        blocked:false,
        timer:40
    },
    reducers:{
        setShow(state,action){
            state.show=action.payload;
        },
        setBlocked(state,action){
            state.blocked=action.payload;
        },
        setTimer(state,action){
            state.timer=action.payload;
        },
        setCounter(state){
            if (state.timer > 0)
            {state.timer=state.timer-1;}
            else {
                state.timer=0 
        }
        },
    }
})
export const{setShow,setBlocked,setTimer,setCounter} = projectSlice.actions;
export default projectSlice.reducer