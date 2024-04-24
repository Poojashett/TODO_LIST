import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slice/todoSlice'

const appStore = configureStore(
    {
        reducer :{
            counter : todoReducer
        }
    }
)

export default appStore;
