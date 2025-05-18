import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  pastes: localStorage.getItem('pastes') ? JSON.parse(localStorage.getItem('pastes')) : []
}

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
    addToPastes:(state, action)=>{

    },

    updateToPastes:(state, action)=>{

    },

    resetAllPastes:(state, action)=>{

    },

    removeFRomPastes:(state, action)=>{

    }
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPastes, resetAllPastes, removeFRomPastes } = pasteSlice.actions

export default pasteSlice.reducer