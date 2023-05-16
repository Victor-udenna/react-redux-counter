import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {increment, decrement, zerovalue, incrementByAmount} from "../Redux/counter";

export const CounterPage = () => {

const dispatch = useDispatch();
const count = useSelector((state) => state.count.number);

  return (
<div className='App'>
    <h1>The count is  <span>{count}</span></h1>
    <button onClick={()=> dispatch(increment(1))}>Increment</button>
    <button onClick={()=> dispatch(decrement())}>Decrement</button>
    <button onClick={()=> dispatch(zerovalue())}>Return to zero</button>
    <button onClick={()=> dispatch(incrementByAmount(44))}>increment by 44</button>
     </div>
  )
}
