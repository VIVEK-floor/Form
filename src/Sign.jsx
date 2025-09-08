import React from 'react';
import './Sign.css'

function Sign() {
  return (
 <>
<div className='h'>
 <h1  className='e'>
    Signin to your PopX Account
 </h1>
 <p>lorem ipsum dolor sit amet,consectetur adipiscing elit.
</p>






     <form>
         <fieldset>
         <legend style={{textAlign:'left'}}>
       <label htmlFor='' className='b'>Emai Address*</label> 
         
          </legend>
          <input   placeholder='eneter you email' />
          </fieldset>
          <fieldset>
         <legend style={{textAlign:'left'}}>
       <label htmlFor='' className='b'>Password*</label>
         {/* <Field type ='text'  name="name" /> */}
         </legend>
          <input   placeholder='eneter the password' />
          </fieldset>
          
        <br></br>           <br></br>     
       <button type="" style={{backgroundColor:'grey',width:'766px'} }className='t'>Login</button>
 
        
        
     </form>
     </div>

 
 </>
  );
}

export default Sign;
