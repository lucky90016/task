
import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'

function Login() {
    
    const navigate =useNavigate();
  
    // const [output ,setOutput] = useNavigate();
    const [email ,setEmail] = useState();
    const [password ,setPassword] = useState();

    const handleSubmit =()=>{
        var userDetails ={"email":email , "password":password}
 
        axios.post('https://6474782e7de100807b1b00e5.mockapi.io/crud',{
            e_email : email,
            e_password: password
        }).then((response)=>{
            
            navigate('/')
        }
       
        
        )}
  return (
    <div className='d-flex justify-content-center'>
      
      <div className='row '  >
            <div className='col-mb-20'>
           <br/>
                <div className='bg-primary p-4 text-center'>
                    <h1>Login Here!!!</h1>
                </div>
                <form >
                    <div className='form-group' >
                        <label> Email: </label>
                        <input type='text' placeholder='Email' className='form-control' value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                        <br/>

                    <div className='form-group' >
                        <label>password: </label>
                        <input type='text' placeholder='password' className='form-control' value={password} onChange={e => setPassword(e.target.value)}  />
                    </div>
                    <br/>
                    <input type='btn' value='Login' onClick={handleSubmit} className='btn btn-primary'/>
                </form>
                <br/>

            
            </div>

        </div>
      
    </div>
  )
}

export default Login;