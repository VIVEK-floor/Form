
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Field } from "formik";
import './Vivek.css';

function Vivek() {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <div className='h'>
    <div style={{ padding: "20px" }}>
      <h2 className="a">Create your PopX account</h2>
      <form onSubmit={handleSubmit}>
        
 <fieldset className='s'>
        <legend style={{textAlign:'left' }}  >
      <label htmlFor='' className='b' >Full Name*</label>
        {/* <input type ='text'  name="name" /> */}
        </legend>
          <input   placeholder='Vivek' />

         </fieldset>
        <br></br>

         <fieldset className='s'>
        <legend style={{textAlign:'left'}}>
      <label htmlFor=''  className='b'>Phone number* </label>
        {/* <input type ='text'  name="name" /> */}
        </legend>
        <input   placeholder='Vivek' />
         </fieldset>
         <br>
        </br>


         <fieldset className='s'>
         <legend style={{textAlign:'left'}}>
       <label htmlFor='' className='b'>Emai Address*</label> 
         {/* <Field type ='text'  name="name" /> */}
          </legend>
          <input   placeholder='Vivek' />
          </fieldset>
<br></br>

         
          <fieldset className='s'>
         <legend style={{textAlign:'left'}}>
       <label htmlFor='' className='b'>Company Name*</label>
         {/* <Field type ='text'  name="name" /> */}
         </legend>
         <input   placeholder='Vivek' />
          </fieldset>
          
        <br></br>         
          
        
         <label htmlFor='' className='b'>Are you Agency*</label><br></br>
         <input  type='radio' id="t"/><label htmlFor="t" className='b'>yes</label>
      
          <input  type='radio' id="t"/><label htmlFor="t" className='b'>NO</label>
         
         

<br>
</br>
<br></br>



        <button type="submit" className="p">Createw Account</button>
      </form>
    </div>
    </div>
  );
}

export default Vivek;