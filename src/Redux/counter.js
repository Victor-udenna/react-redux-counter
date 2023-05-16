import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: {
      number: 0,
      name: "victor"
    }
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable stoate based off those changes
      state.count.number += 1
    },
    decrement: state => {
      if(state.count.number === 0){
        state.count.number = 0
      } else{
        state.count.number -= 1
      }
    },
    zerovalue: state => {
      state.count.number = 0;
    },
    incrementByAmount: (state, action) => {
      state.count.number += action.payload
    },
    changeoldName: (state, action) =>{
      state.count.name = action.payload;
  }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, zerovalue, changeoldName } = counterSlice.actions

export default counterSlice.reducer