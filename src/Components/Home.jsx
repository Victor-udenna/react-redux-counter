import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <main>
        <h1>Redux test</h1>
        <Link to="/CounterPage">
        <div className='page_link'>Counter</div>
        </Link>
        <Link to="/EditText">
        <div className='page_link'>EditText</div>
        </Link>
        <Link to="/Counter2">
        <div className='page_link'>Counter 2</div>
        </Link>
    </main>
  )
}
