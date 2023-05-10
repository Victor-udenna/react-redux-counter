import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decrement: state => {
      if(state.count === 0){
        state.count = 0
      } else{
        state.count -= 1
      }
    },
    zerovalue: state => {
      state.count = 0;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, zerovalue } = counterSlice.actions

export default counterSlice.reducer