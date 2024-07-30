import { createSlice } from '@reduxjs/toolkit'


const registerSlice = createSlice({
  name: 'register',
  initialState: {
    isRegister: false
    // user: {
    //   name: '',
    //   token: '',
    //   id: ''
    // }
  },
  reducers: {
    register: (state, action) => {
      state.isRegister = action.payload
    },
    registerAsync: () => {}
  }
})

export const {register, registerAsync } = registerSlice.actions

export default registerSlice.reducer