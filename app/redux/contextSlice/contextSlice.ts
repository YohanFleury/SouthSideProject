import { createSlice } from '@reduxjs/toolkit'

interface initialStateProps {
    theme: 'dark' | 'light',
    chatVisible: boolean
}

export const initialState: initialStateProps = {
    theme: "dark",
    chatVisible: false
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
        },

        setChatVisible: (state, {payload}) => {
            state.chatVisible = payload
        }
        
    }
})


export const { setTheme, switchTheme, setChatVisible } = contextSlice.actions

export default contextSlice.reducer