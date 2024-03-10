import { createSlice } from "@reduxjs/toolkit";



const userSlice=createSlice({
    name:'User',
    initialState:{
    user:JSON.parse(sessionStorage.getItem('authUser')) || {
        userName:'',
        password:'',
        email:'',
        authUser:false
    }
    },
    reducers:{
       login(state,action){
        const userId=action.payload;
        const userValidate=/^[A-Za-z]{4,10}$/i.test(userId.name)
        const passwordValidate=/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/.test(userId.password)
        //should contain at least one digit,at least two special character,at least one alphatic,should not contain space//
        const emailValidate=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(userId.email)
        state.user=userId
        
        if (!userValidate || !passwordValidate || !emailValidate){
            state.user.authUser=false
        }
        else {state.user.authUser=true
        const saveState=JSON.stringify(userId)
        sessionStorage.setItem('authUser',saveState)
        }
       },
    
    logout (state) {
        state.user={
            userName:'',
            password:'',
            email:'',
            authUser:false
        }
     sessionStorage.clear()
    },
}
})
export const {login,logout}=userSlice.actions;
export default userSlice.reducer;