import './App.css'
import { CounterPage } from './Components/CounterPage';
import { Home } from './Components/Home';
import { EditText } from './Components/EditText';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/EditText' element={<EditText/>}/>
      <Route path='/CounterPage' element={<CounterPage/>}/>
    </Routes>
    </BrowserRouter>
    </>


  )
}

export default App
