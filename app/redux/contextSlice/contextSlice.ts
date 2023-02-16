import { createSlice } from '@reduxjs/toolkit'

interface initialStateProps {
    theme: 'dark' | 'light'
}

export const initialState: initialStateProps = {
    theme: "dark"
}

export const contextSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        setTheme: (state, {payload}) => {
            state.theme = payload
        },

        switchTheme: (state) => {
            state.theme === "dark" 
            ? state.theme = "light"
            : state.theme = "dark"
        }
        
    }
})


export const { setTheme, switchTheme } = contextSlice.actions

export default contextSlice.reducer