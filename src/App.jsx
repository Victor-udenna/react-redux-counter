import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementByAmount } from './Redux/counter';

function App() {

  const {count} = useSelector((state) => state.count)
  const dispatch = useDispatch();

  return (
    <>
  <div className='App'>
 <h1>The count is : <span>{count}</span></h1>
 <button onClick={()=> dispatch(increment())}>Increment</button>
 <button onClick={()=> dispatch(decrement())}>Decrement</button>
 <button onClick={()=> dispatch(incrementByAmount(44))}>increment by 44</button>
  </div>
    </>
  )
}

export default App
