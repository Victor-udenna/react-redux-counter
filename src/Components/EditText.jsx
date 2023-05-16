import React, {useState} from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import {changeoldName} from "../Redux/counter";

export const EditText = () => {
 const [name, setName] = useState("");
 const text = useSelector((state)=> state.count.name);
 const dispatch = useDispatch();

 const changetext = ()=>{
 dispatch(changeoldName(name));
 }

  return (
<main>
      <h1>My name is <span>{text}</span></h1>
      <div><input className='input_field' onChange={(e)=> setName(e.target.value)} placeholder='enter your name'/>
      <button className='change_btn' onClick={changetext}>Change name</button></div>  
    </main>

  )
}
