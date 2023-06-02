import './Register.css';
import React ,{useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register (){

    const [name , setName]=useState('');
    const [email , setEmail]=useState('');
    const [address , setAddress]=useState('');
    const [password , setPassword]=useState('');
    const [mobile , setMobile]=useState('');

      const navigate = useNavigate();

       const handleSubmit=(e) =>{
        e.preventDefault();
        axios.post('https://6474782e7de100807b1b00e5.mockapi.io/crud',{
            e_name: name ,
            e_email : email,
            e_address: address,
            e_password: password,
            e_mobile: mobile

        }).then(()=>{
            navigate('/')
        })
         

       }

    return (
        
        <>
      <div className='container d-flex justify-content-center'>
      <div className='row '  >
            <div className='col-md-20'>
           <br/>
                <div className='bg-primary p-2 text-center'>
                    <h1>Sign Up</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className='form-group' >
                        <label>Eneter Name: </label>
                        <input type='text' placeholder='Name' className='form-control' onChange={(e)=>  setName(e.target.value)} />
                    </div>
                        <br/>

                    <div className='form-group' >
                        <label>Email: </label>
                        <input type='text' placeholder='Email' className='form-control' onChange={(e)=>  setEmail(e.target.value)} />
                    </div>
                    <br/>
                    <div className='form-group' >
                        <label>password: </label>
                        <input type='Number' placeholder='password' className='form-control' onChange={(e)=>  setPassword(e.target.value)}/>
                    </div>
                    <br/>

                    <div className='form-group' >
                        <label>Address: </label>
                        <input type='text' placeholder='Address' className='form-control' onChange={(e)=>  setAddress(e.target.value)} />
                    </div>
                    <br/>
                    

                    <div className='form-group' >
                        <label>Mobile: </label>
                        <input type='text' placeholder='Mobile' className='form-control' onChange={(e)=>  setMobile(e.target.value)}/>
                    </div>

                    <br/>
                    <input type='submit' value='submit' className='btn btn-primary'/>
                </form>
                <br/>

            
            </div>

        </div>
      </div>
        </>
    )
}
            
export default Register;


      