import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: {
      number: 0,
      name: "enter"
    }
  },
  reducers: { 
    increment: state => {
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