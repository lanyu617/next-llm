"use client"
import { configureStore } from '@reduxjs/toolkit'

import { sessionReducer } from './reducers/sessionReduce'

export default configureStore({
    reducer: {
        sessions: sessionReducer
    }
})
