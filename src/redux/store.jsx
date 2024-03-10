import Reducer from "./reducer";
import questionreducer from "./questionreducer";
import userReducer from "./userReducer";
import { configureStore } from '@reduxjs/toolkit'

const Store = configureStore({
    reducer: {
      project: Reducer,
      Branch:questionreducer,
      User:userReducer

    
    }
  })
  export default Store