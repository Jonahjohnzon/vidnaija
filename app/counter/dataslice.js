import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: {},
}

export const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    Adddata: (state, action) => {
      state.data += action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { Adddata } = dataSlice.actions

export default dataSlice.reducer