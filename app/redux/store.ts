import { configureStore } from '@reduxjs/toolkit'
import contextSlice from './contextSlice/contextSlice'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import userTestSLice from './userTestSlice'


export const store = configureStore({
    reducer: {
        context: contextSlice,
        users: userTestSLice,
    }
})


type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector