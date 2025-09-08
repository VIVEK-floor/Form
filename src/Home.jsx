


import React from 'react';
import { useNavigate } from 'react-router-dom';  
import './Home.css';

function Home() {
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/vivek");  
  };

  return (
    <>
    <div className=''>
        <div className='z'>
      <h1 className='a'>Welcome to PopX</h1>
      <div className='l'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto suscipit ut molestias et nobis accusantium.
      </div>
<br/>
      <button
        type="button"
        style={{ backgroundColor: 'blue' }}
        className='t'
        onClick={handleSubmit}
      >
        Create Account
      </button>
      <br />
     <br />
      <button
        type="button"
        style={{ backgroundColor: 'blue' }}
        className='t'
        onClick={() => navigate("/sign")}  
      >
Already Registered? Login
      </button>
      </div>
      </div>
    </>
  );
}

export default Home;