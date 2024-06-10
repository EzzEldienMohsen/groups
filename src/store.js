import { configureStore } from '@reduxjs/toolkit';
import groupsReducer from "./features/groups/GroupSlice"

export const store = configureStore({
    reducer:{
        groups:groupsReducer
    }
})