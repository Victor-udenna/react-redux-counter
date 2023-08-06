import './App.css'
import { CounterPage } from './Components/CounterPage';
import { Home } from './Components/Home';
import { EditText } from './Components/EditText';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Counter2 from './Components/Counter2';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/EditText' element={<EditText/>}/>
      <Route path='/CounterPage' element={<CounterPage/>}/>
      <Route path='/Counter2' element={<Counter2/>}/>
    </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
