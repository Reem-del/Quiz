import { createSlice } from "@reduxjs/toolkit";

const questionSlice=createSlice({
    name:"Branch",
    initialState:{
        collection:[{type:"Computer Science",category:18,scoreRes:0,level:''}
        ,{type:"Book",category:10,scoreRes:0,level:''}
        ,{type:"Film",category:11,scoreRes:0,level:''},
        {type:"Politics",category:24,scoreRes:0,level:''}
        ,{type:"Theatre and Musical",category:13,scoreRes:0,level:''},
        {type:"Sport",category:21,scoreRes:0,level:''},
        {type:"History",category:23,scoreRes:0,level:''},
        {type:"Sciencs & Nature",category:17,scoreRes:0,level:''}],
        branch:{
        category:0,
        type:''},
        score:0,
        
    
        
    },
    reducers:{
    filterBranch(state,action){
        state.branch=state.collection.filter(col =>col.category === action.payload.category)
        state.branch.category=action.payload.category;
        state.branch.type=action.payload.type;
        state.branch.score=action.payload.scoreRes

    },
    setScore(state){
    state.score=state.score+1
    },
    setscoreRes(state,action){
        const data=state.collection.find(col =>col.category === action.payload )
        if(data){
        data.scoreRes=state.score;
        if (data.scoreRes <= 3)
        {data.level ='Bad'}
        else if (data.scoreRes <= 6)
        {data.level ='Good'}
        else if (data.scoreRes <= 8)
        {data.level ='Very Good'}

            else {data.level='Excellent'}  
        state.score=0;
        }
        else  {data.scoreRes=0}
    }
},

})
export const{filterBranch,setScore,setscoreRes} =questionSlice.actions;
export default questionSlice.reducer